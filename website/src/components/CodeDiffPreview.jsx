import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { 
  CheckCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Activity, 
  Copy, 
  Check 
} from 'lucide-react'

const EXAMPLES = [
  {
    id: 'god-function',
    title: 'Extract Method & Decouple God Routine',
    category: 'Structural Decoupling',
    smell: 'Long Method & High Cyclomatic Complexity (V(G)=18)',
    before: `def process_legacy_order(order_data, db_session, email_client):
    # LEGACY SMELL: 65 lines with coupled business logic
    if not order_data.get("id") or order_data.get("status") != "PENDING":
        return False
    
    total = 0
    items = order_data.get("items", [])
    for itm in items:
        price = db_session.query_price(itm["sku"])
        if price is None:
            return {"error": "Invalid SKU", "sku": itm["sku"]}
        total += price * itm["qty"]
        if itm.get("discount"):
            total -= total * (itm["discount"] / 100)

    # Inlined payment transaction and side-effects
    tx = db_session.create_tx(order_data["id"], total)
    if not tx.success:
        return {"status": "FAILED", "code": tx.err_code}

    email_client.send_receipt(order_data["email"], total)
    return {"status": "SUCCESS", "total": total, "tx_id": tx.id}`,
    after: `class OrderProcessor:
    """Refactored via CUQA detection & SCTV LibCST codemod"""
    
    def __init__(self, db: DatabaseSession, notifier: NotificationService):
        self.db = db
        self.notifier = notifier

    def calculate_order_total(self, items: list[OrderItem]) -> float:
        return sum(
            self.db.get_effective_price(item.sku, item.discount) * item.qty 
            for item in items
        )

    def process(self, order: ValidatedOrder) -> OrderResult:
        total = self.calculate_order_total(order.items)
        tx = self.db.execute_transaction(order.id, total)
        
        self.notifier.dispatch_receipt(order.email, total)
        return OrderResult(status=Status.SUCCESS, total=total, tx_id=tx.id)`,
    invariants: [
      { rule: 'Output Signature Equivalence', status: 'PASS', score: '100%' },
      { rule: 'State Mutation Parity (DB Session)', status: 'PASS', score: '100%' },
      { rule: 'Execution Time Delta', status: 'IMPROVED', score: '-38%' }
    ]
  },
  {
    id: 'invariant-mining',
    title: 'Testless Invariant Mining & Type Stabilization',
    category: 'Behavioral Verification',
    smell: 'Implicit Type Coercion & Silent Runtime Failure Risk',
    before: `def calculate_risk_quotient(user_metrics, historical_weights):
    # Implicit dynamic types without schema guards
    score = 0
    for key, val in user_metrics.items():
        weight = historical_weights.get(key, 1)
        # Prone to TypeError on None or stringified digits
        score += float(val) * float(weight)
    
    threshold = user_metrics.get("cap", 100)
    return score / threshold if threshold else 0.0`,
    after: `from typing import Mapping
from dataclasses import dataclass

@dataclass(frozen=True)
class RiskQuotient:
    score: float
    is_safe: bool

def calculate_risk_quotient(
    metrics: Mapping[str, float | int],
    weights: Mapping[str, float]
) -> RiskQuotient:
    """Invariant Mined: 2,500 synthetic inputs verified without tests"""
    total = sum(float(val) * weights.get(k, 1.0) for k, val in metrics.items())
    cap = max(float(metrics.get("cap", 100.0)), 1e-6)
    normalized = total / cap
    
    return RiskQuotient(score=normalized, is_safe=normalized < 0.85)`,
    invariants: [
      { rule: '2,500 Sampled Inputs Tested', status: 'PASS', score: '0 Regressions' },
      { rule: 'Division-By-Zero Boundary', status: 'GUARDED', score: 'Protected' },
      { rule: 'Pre/Post Fingerprint Parity', status: 'VERIFIED', score: 'Identical' }
    ]
  }
]

export default function CodeDiffPreview() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const active = EXAMPLES[activeTab]

  const handleCopy = () => {
    navigator.clipboard.writeText(active.after)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            <Activity className="w-3.5 h-3.5" />
            <span>Real-World Transformation Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            See the Multi-Agent Engine in Action.
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            From tangled legacy spaghetti code to clean, modular, and mathematically verified architecture.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {EXAMPLES.map((ex, i) => (
            <button
              key={ex.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeTab === i
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400'
              }`}
            >
              {ex.title}
            </button>
          ))}
        </div>

        {/* Split Window */}
        <div className="rounded-3xl glass-panel p-4 sm:p-6 border border-slate-300/60 dark:border-white/10 shadow-2xl overflow-hidden">
          
          {/* Header of Code Box */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/60 dark:border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-mono font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                {active.smell}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Category: <strong className="text-slate-700 dark:text-slate-200">{active.category}</strong>
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill text-xs font-mono text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Refactored Code' : 'Copy Clean Code'}</span>
            </button>
          </div>

          {/* Dual Code Panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Before (Legacy) */}
            <div className="flex flex-col rounded-2xl bg-slate-950/90 border border-red-500/30 overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-4 py-2.5 bg-red-950/40 border-b border-red-500/20 text-xs font-mono">
                <div className="flex items-center gap-2 text-red-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>BEFORE: Untested Legacy Code (Detected by CUQA)</span>
                </div>
                <span className="text-slate-500">Python 2/3 Legacy</span>
              </div>
              <div className="p-3 text-xs font-mono overflow-x-auto flex-1 max-h-[380px]">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', margin: 0, padding: 0, fontSize: '12px' }}
                >
                  {active.before}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* After (Refactored) */}
            <div className="flex flex-col rounded-2xl bg-slate-950/90 border border-emerald-500/30 overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-4 py-2.5 bg-emerald-950/40 border-b border-emerald-500/20 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>AFTER: AST-Safe Refactored (Transformed by SCTV)</span>
                </div>
                <span className="text-emerald-400">LibCST Codemod Verified</span>
              </div>
              <div className="p-3 text-xs font-mono overflow-x-auto flex-1 max-h-[380px]">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', margin: 0, padding: 0, fontSize: '12px' }}
                >
                  {active.after}
                </SyntaxHighlighter>
              </div>
            </div>

          </div>

          {/* Invariant Mining Telemetry Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-cyan-950/20 dark:bg-cyan-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase font-bold text-cyan-300">
                  Behavioral Fingerprinting & Invariant Mining Verification
                </h4>
                <p className="text-xs text-slate-400">
                  Automated delta verification guaranteed identical semantic execution with zero unit tests required.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {active.invariants.map((inv, idx) => (
                <div key={idx} className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-[11px] font-mono flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-300">{inv.rule}:</span>
                  <span className="font-bold text-cyan-300">{inv.score}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
