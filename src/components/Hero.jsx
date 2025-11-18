import { Shield, Heart, Users, ArrowRight } from "lucide-react";

export default function Hero({ onGetQuotes }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.25),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-200 px-3 py-1 rounded-full text-xs mb-4">
              <Shield size={16} /> Trusted life insurance comparisons
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Protect your family. Compare the best life insurance options in minutes.
            </h1>
            <p className="text-blue-200/90 mt-4 text-lg">
              Built for busy breadwinners. See real monthly prices tailored to your age, smoker status, and coverage needs.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <button onClick={onGetQuotes} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl transition">
                Get my quotes <ArrowRight size={18} />
              </button>
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/40?img=12" className="w-8 h-8 rounded-full border border-slate-800" />
                <img src="https://i.pravatar.cc/40?img=15" className="w-8 h-8 rounded-full border border-slate-800" />
                <img src="https://i.pravatar.cc/40?img=18" className="w-8 h-8 rounded-full border border-slate-800" />
              </div>
              <p className="text-blue-200/70 text-sm">Join thousands of dads protecting what matters</p>
            </div>
            <div className="mt-6 flex items-center gap-6 text-blue-200/80">
              <div className="flex items-center gap-2"><Heart className="text-pink-400" size={18} /> Family-first guidance</div>
              <div className="flex items-center gap-2"><Users className="text-emerald-400" size={18} /> Top-rated insurers</div>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6">
            <img src="/family-shield.png" alt="Family protected" className="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
