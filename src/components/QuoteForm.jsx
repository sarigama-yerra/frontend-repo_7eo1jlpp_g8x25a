import { useState } from "react";
import { Man, Cigarette, Wallet, Timer } from "lucide-react";

export default function QuoteForm({ onSubmit }) {
  const [age, setAge] = useState(35);
  const [smoker, setSmoker] = useState(false);
  const [coverage, setCoverage] = useState(500000);
  const [term, setTerm] = useState(20);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ age: Number(age), gender: "male", smoker, coverage_amount: Number(coverage), term_years: Number(term) });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 grid gap-4">
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <label className="text-sm text-blue-200/80">Age</label>
          <input type="number" min="18" max="70" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 w-full bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="text-sm text-blue-200/80">Smoker</label>
          <select value={smoker ? "yes" : "no"} onChange={(e) => setSmoker(e.target.value === "yes")} className="mt-1 w-full bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-blue-200/80">Coverage</label>
          <select value={coverage} onChange={(e) => setCoverage(e.target.value)} className="mt-1 w-full bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white">
            <option value={250000}>$250,000</option>
            <option value={500000}>$500,000</option>
            <option value={750000}>$750,000</option>
            <option value={1000000}>$1,000,000</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-blue-200/80">Term</label>
          <select value={term} onChange={(e) => setTerm(e.target.value)} className="mt-1 w-full bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-2 text-white">
            <option value={10}>10 years</option>
            <option value={20}>20 years</option>
            <option value={30}>30 years</option>
          </select>
        </div>
      </div>
      <button type="submit" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl transition">
        See my prices
      </button>
    </form>
  );
}
