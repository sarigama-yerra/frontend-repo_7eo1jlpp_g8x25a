import { useMemo } from "react";
import { ShieldCheck, Star } from "lucide-react";

export default function QuoteResults({ quotes, loading }) {
  const best = useMemo(() => {
    if (!quotes || quotes.length === 0) return null;
    return quotes.reduce((a, b) => (a.monthly_premium < b.monthly_premium ? a : b));
  }, [quotes]);

  if (loading) {
    return (
      <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-8 text-blue-200">
        Calculating quotes…
      </div>
    );
  }

  if (!quotes || quotes.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4">
      {quotes.map((q, i) => (
        <div key={i} className={`rounded-2xl p-5 border ${best === q ? "border-emerald-400/40 bg-emerald-400/5" : "border-blue-500/20 bg-slate-800/60"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <ShieldCheck className="text-blue-300" size={20} />
              </div>
              <div>
                <div className="text-white font-semibold">{q.insurer_name} • {q.plan_name}</div>
                <div className="text-xs text-blue-200/70">${q.coverage_amount.toLocaleString()} • {q.term_years} years</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">${q.monthly_premium.toFixed(2)}/mo</div>
              {best === q && (
                <div className="inline-flex items-center gap-1 text-emerald-300 text-xs mt-1"><Star size={14}/> Best value</div>
              )}
            </div>
          </div>
          {q.features && q.features.length > 0 && (
            <div className="mt-3 text-blue-200/80 text-sm">
              {q.features.slice(0,3).map((f, idx) => (
                <span key={idx} className="mr-2">• {f}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
