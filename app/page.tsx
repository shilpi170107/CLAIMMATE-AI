'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FileText,
  Languages,
  LockKeyhole,
  Menu,
  MessageCircle,
  Mic,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Upload,
  X,
} from 'lucide-react'

const features = [
  { icon: FileText, title: 'Policy-to-action', text: 'Turn complex policy clauses into clear next steps.' },
  { icon: ScanLine, title: 'Smart document check', text: 'Catch missing, blurry, or duplicate documents before submission.' },
  { icon: ShieldCheck, title: 'Explainable answers', text: 'Every recommendation is grounded in the right policy section.' },
  { icon: Languages, title: 'Built for everyone', text: 'Multilingual and voice support makes insurance more accessible.' },
]

const journey = [
  ['01', 'Understand', 'Ask questions in everyday language.'],
  ['02', 'Prepare', 'Get a personalized claim checklist.'],
  ['03', 'Submit', 'Upload documents with confidence.'],
  ['04', 'Resolve', 'Track progress and understand next steps.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const [language, setLanguage] = useState('EN')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07120f] text-[#edf8f0]">
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-[#1b382a]/80 bg-[#07120f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollTo('top')} className="flex items-center gap-3" aria-label="ClaimMate home">
            <span className="grid size-10 place-items-center rounded-2xl bg-[#d7f5df] text-[#18a957]"><Sparkles /></span>
            <span className="text-lg font-bold tracking-tight">ClaimMate<span className="text-[#16a45a]">.ai</span></span>
          </button>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#9bb5a5] md:flex">
            <button onClick={() => scrollTo('solution')}>Solution</button>
            <button onClick={() => scrollTo('journey')}>How it works</button>
            <button onClick={() => scrollTo('impact')}>Impact</button>
            <button onClick={() => scrollTo('business')}>Business model</button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')} className="hidden rounded-full border border-[#d8e4dc] px-3 py-2 text-xs font-bold text-[#9bb5a5] sm:block" aria-label="Change language">{language}</button>
            <button onClick={() => setShowDemo(true)} className="hidden rounded-full bg-[#123b2a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1c5740] sm:block">Try demo <ArrowRight className="ml-1 inline size-4" /></button>
            <button className="rounded-full p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <div className="flex flex-col gap-4 border-t border-[#1b382a] px-5 py-5 text-sm font-medium md:hidden"><button onClick={() => scrollTo('solution')}>Solution</button><button onClick={() => scrollTo('journey')}>How it works</button><button onClick={() => scrollTo('impact')}>Impact</button><button onClick={() => setShowDemo(true)} className="rounded-full bg-[#123b2a] px-4 py-3 text-white">Try the interactive demo</button></div>}
      </nav>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-36 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-28 lg:pt-48">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#bfe8cb] bg-[#e8f8ec] px-3 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#168b4e]"><span className="size-2 rounded-full bg-[#22bd68]" /> AI-powered financial journeys</div>
          <h1 className="text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl">Insurance that <span className="text-[#18a957]">speaks human.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#a4b9ab]">ClaimMate turns confusing policies and stressful claims into a guided journey people can complete with confidence.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><button onClick={() => setShowDemo(true)} className="rounded-full bg-[#123b2a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#123b2a]/15 transition hover:-translate-y-0.5 hover:bg-[#1c5740]">See how it works <ArrowRight className="ml-2 inline size-4" /></button><button onClick={() => scrollTo('solution')} className="rounded-full border border-[#315743] bg-[#0d2119] px-6 py-3.5 text-sm font-semibold text-[#dff7e5]">Explore the solution</button></div>
          <div className="mt-12 flex items-center gap-7 text-sm text-[#65776d]"><div><strong className="block text-2xl font-semibold text-[#173d2c]">40%</strong>faster verification</div><div className="h-10 w-px bg-[#d5e3da]" /><div><strong className="block text-2xl font-semibold text-[#173d2c]">30%</strong>fewer incomplete claims</div></div>
        </div>
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute -right-20 -top-20 size-80 rounded-full bg-[#ccefd6] blur-3xl" />
          <div className="relative w-full max-w-[470px] rounded-[2rem] border border-white/80 bg-[#123524] p-4 shadow-2xl shadow-[#174c34]/10 sm:p-6">
            <div className="rounded-[1.5rem] bg-[#0d2119] p-5 shadow-sm sm:p-7">
              <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.15em] text-[#799084]">Claim readiness</p><p className="mt-1 text-2xl font-semibold">Your claim is ready</p></div><div className="grid size-14 place-items-center rounded-full border-[6px] border-[#bdecc9] text-sm font-bold text-[#15964e]">90%</div></div>
              <div className="mt-7 h-2 rounded-full bg-[#eaf0ec]"><div className="h-full w-[90%] rounded-full bg-[#20b662]" /></div>
              <div className="mt-7 flex flex-col gap-3">{['Policy match confirmed', 'Hospital bill verified', 'Discharge summary pending'].map((item, i) => <div key={item} className="flex items-center gap-3 rounded-xl bg-[#132c21] p-3 text-sm"><span className={`grid size-7 place-items-center rounded-full ${i === 2 ? 'bg-[#fff2d2] text-[#b4790d]' : 'bg-[#d9f6e0] text-[#179d53]'}`}>{i === 2 ? <Upload className="size-3.5" /> : <Check className="size-3.5" />}</span><span className="text-[#b0c4b6]">{item}</span></div>)}</div>
              <button onClick={() => setShowDemo(true)} className="mt-6 w-full rounded-xl bg-[#123b2a] py-3 text-sm font-semibold text-white">Complete my claim <ChevronRight className="ml-1 inline size-4" /></button>
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-[#d8eee0] bg-[#0d2119] px-4 py-3 shadow-xl"><span className="grid size-9 place-items-center rounded-xl bg-[#dff7e5] text-[#18a957]"><MessageCircle className="size-4" /></span><div><p className="text-xs text-[#74867b]">ClaimMate assistant</p><p className="text-sm font-semibold">Here when you need us</p></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e0ebe3] bg-[#0d2119]/60"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-6 text-center text-xs font-bold uppercase tracking-[.18em] text-[#8b9d92] lg:justify-between lg:px-8"><span>Health insurance</span><span>Fintech</span><span>Banking</span><span>Customer-first AI</span><span>Secure by design</span></div></section>

      <section id="solution" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="max-w-2xl"><p className="section-kicker">The problem</p><h2 className="section-title">Financial journeys should not feel like a maze.</h2><p className="section-copy">People do not struggle because insurance is unavailable. They struggle because it is difficult to understand, difficult to complete, and impossible to track.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3"><div className="problem-card md:col-span-2"><span className="text-5xl font-semibold text-[#d8e9dc]">01</span><h3>Too much fine print.</h3><p>Long policy documents hide the answer customers actually need: “Am I covered?”</p></div><div className="problem-card bg-[#123b2a] text-white"><span className="text-5xl font-semibold text-[#6bc58b]">02</span><h3 className="text-white">Too many unknowns.</h3><p className="text-[#b8d2c1]">A submitted claim should not disappear into a black box.</p></div><div className="problem-card bg-[#e4f7e9]"><span className="text-5xl font-semibold text-[#8bd9a5]">03</span><h3>Too much back-and-forth.</h3><p>One missing document can turn a simple claim into weeks of avoidable delay.</p></div><div className="problem-card md:col-span-2"><div className="flex items-start justify-between gap-6"><div><span className="text-5xl font-semibold text-[#d8e9dc]">04</span><h3>Too little confidence.</h3><p>Rejection language is often harder to understand than the policy itself.</p></div><div className="hidden size-20 shrink-0 rounded-full border-8 border-[#dff4e4] sm:block" /></div></div></div></section>

      <section className="bg-[#123b2a] text-white"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="section-kicker text-[#86dba3]">The solution</p><h2 className="section-title text-white">A calm co-pilot for every claim.</h2><p className="section-copy text-[#b8d2c1]">ClaimMate translates complexity into clear actions, catches problems early, and keeps people informed from first question to final resolution.</p></div><div className="grid gap-4 sm:grid-cols-2">{features.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-white/10 bg-[#0d2119]/[.06] p-5"><Icon className="mb-8 size-6 text-[#6bd18c]" /><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#b8d2c1]">{text}</p></div>)}</div></div></div></section>

      <section id="journey" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="text-center"><p className="section-kicker">How it works</p><h2 className="section-title mx-auto max-w-2xl">From “I’m confused” to “I’m covered.”</h2></div><div className="mt-16 grid gap-8 md:grid-cols-4">{journey.map(([number, title, text], i) => <div key={number} className="relative"><div className="mb-7 flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#dff6e5] text-sm font-bold text-[#168f4d]">{number}</span>{i < journey.length - 1 && <span className="hidden h-px flex-1 bg-[#cfe2d5] md:ml-5 md:block" />}</div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 leading-7 text-[#6a7b71]">{text}</p></div>)}</div><div className="mt-16 rounded-3xl border border-[#d9e9dd] bg-[#f0faF2] p-6 sm:p-8"><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><div className="grid size-12 place-items-center rounded-2xl bg-[#0d2119] text-[#18a957] shadow-sm"><FileCheck2 /></div><div><p className="text-sm font-semibold">Policy match found</p><p className="mt-1 text-sm text-[#6a7b71]">Your treatment is covered under Section 4.2</p></div></div><span className="rounded-full bg-[#d7f5df] px-4 py-2 text-xs font-bold text-[#168f4d]">Explained by AI</span></div></div></section>

      <section id="impact" className="border-y border-[#e0ebe3] bg-[#0d2119]"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-32"><div><p className="section-kicker">Why it matters</p><h2 className="section-title">Better journeys create better outcomes.</h2><p className="section-copy">When customers understand what is happening, they make fewer mistakes—and businesses build trust that lasts beyond a single transaction.</p></div><div className="grid grid-cols-2 gap-4"><div className="impact-stat"><strong>30%</strong><span>fewer incomplete submissions</span></div><div className="impact-stat"><strong>25%</strong><span>fewer repetitive queries</span></div><div className="impact-stat"><strong>40%</strong><span>faster document verification</span></div><div className="impact-stat"><strong>20%</strong><span>higher customer satisfaction</span></div></div></div></section>

      <section id="business" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[1fr_1fr]"><div><p className="section-kicker">Built to scale</p><h2 className="section-title">A smarter layer for financial services.</h2><p className="section-copy">Start with health insurance. Expand across lending, vehicle insurance, banking, and every high-friction financial journey.</p><div className="mt-8 flex flex-wrap gap-2"><span className="pill">Health insurance</span><span className="pill">Lending</span><span className="pill">Fintech</span><span className="pill">Banking</span></div></div><div className="rounded-3xl bg-[#102b1e] p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-[.16em] text-[#168f4d]">Business model</p><h3 className="mt-4 text-2xl font-semibold">B2B SaaS for insurers & fintechs</h3><div className="mt-7 flex flex-col gap-4">{['Platform subscription', 'Usage-based claim processing', 'Enterprise integrations', 'White-label customer experience'].map(item => <div key={item} className="flex items-center gap-3 text-sm text-[#53685a]"><CheckCircle2 className="size-5 text-[#18a957]" />{item}</div>)}</div></div></div></section>

      <section className="px-5 pb-12 lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#bdf0c9] px-6 py-14 text-center sm:px-12 lg:py-20"><LockKeyhole className="mx-auto size-8 text-[#167f47]" /><h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-[#dff7e5] sm:text-5xl">The future of insurance is not more forms. It is better guidance.</h2><p className="mx-auto mt-5 max-w-xl text-[#35634a]">ClaimMate helps people understand what they are entitled to—and complete the journey with confidence.</p><button onClick={() => setShowDemo(true)} className="mt-8 rounded-full bg-[#123b2a] px-6 py-3.5 text-sm font-semibold text-white">Experience ClaimMate <ArrowRight className="ml-2 inline size-4" /></button></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#8fa99a] sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© 2026 ClaimMate.ai</p><div className="flex gap-5"><span>Secure by design</span><span>Human-in-the-loop</span><span>Built for trust</span></div></footer>

      {showDemo && <div className="fixed inset-0 z-50 grid place-items-center bg-[#092318]/60 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="ClaimMate demo"><div className="relative w-full max-w-lg rounded-3xl bg-[#0d2119] p-7 shadow-2xl sm:p-9"><button onClick={() => setShowDemo(false)} className="absolute right-5 top-5 rounded-full p-2 text-[#8fa99a] hover:bg-[#eef6f0]" aria-label="Close demo"><X /></button><div className="grid size-12 place-items-center rounded-2xl bg-[#dff7e5] text-[#18a957]"><Mic /></div><p className="mt-6 text-sm font-bold uppercase tracking-[.15em] text-[#18a957]">Interactive preview</p><h2 className="mt-2 text-3xl font-semibold">What would you like to know?</h2><p className="mt-3 leading-7 text-[#a4b9ab]">Try asking ClaimMate: “Is my father’s three-day hospitalization covered?”</p><div className="mt-7 rounded-2xl border border-[#d8e7dc] bg-[#f7fbf7] p-4 text-sm text-[#53685a]">“My treatment appears eligible under Section 4.2. I found 3 required documents and your claim is 90% ready.”</div><button onClick={() => setShowDemo(false)} className="mt-6 w-full rounded-xl bg-[#123b2a] py-3.5 text-sm font-semibold text-white">Start my claim <ArrowRight className="ml-1 inline size-4" /></button></div></div>}
    </main>
  )
}
