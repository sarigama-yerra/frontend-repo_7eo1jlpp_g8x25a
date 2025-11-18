import { useState } from "react";
import Hero from "./components/Hero";
import QuoteForm from "./components/QuoteForm";
import QuoteResults from "./components/QuoteResults";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchQuotes(payload) {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setQuotes(data || []);
    } catch (e) {
      console.error(e);
      setQuotes([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Hero onGetQuotes={() => fetchQuotes({ age: 35, gender: "male", smoker: false, coverage_amount: 500000, term_years: 20 })} />
        <div className="mt-6" />
        <QuoteForm onSubmit={fetchQuotes} />
        <div className="mt-4" />
        <QuoteResults quotes={quotes} loading={loading} />
        <footer className="text-center text-blue-200/60 text-xs mt-10">Not financial advice. Estimates for comparison only.</footer>
      </div>
    </div>
  );
}

export default App;
