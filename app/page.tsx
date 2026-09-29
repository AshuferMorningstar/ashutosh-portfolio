'use client'

import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Check,
  Copy,
  Database,
  ExternalLink,
  GitBranch,
  Network,
  Mail,
  MapPin,
  Phone,
  Terminal,
  WandSparkles,
  X,
} from 'lucide-react'
import { useState } from 'react'

const githubRepos = 'https://github.com/AshuferMorningstar?tab=repositories'

const projects = [
  {
    number: '01',
    title: 'SQL Data Job Market Analysis',
    summary: 'Mapped 10,000+ global analyst postings to uncover salary, regional, remote-work, and skill-learning patterns.',
    tags: ['Python', 'SQL', 'PostgreSQL', 'GitHub Copilot'],
    githubUrl: 'https://github.com/AshuferMorningstar/SQL_PROJECT_DATA_JOB_ANALYSIS',
  },
  {
    number: '02',
    title: 'Revenue Leakage Automation',
    summary: 'Built a Python reporting pipeline that validates transaction logs and flags mismatches beyond a 1% variance ceiling.',
    tags: ['Python', 'Automation', 'Data Quality'],
    githubUrl: 'https://github.com/AshuferMorningstar/revenue_leakage_qmr',
  },
  {
    number: '03',
    title: 'Sentiment Metrics Dashboard',
    summary: 'Combined API ingestion, Gemini sentiment scoring, and interactive KPI views into one modular analytics workflow.',
    tags: ['Python', 'Gemini API', 'Analytics'],
    liveUrl: 'https://sentiment-metrics-quarterly-dashboard1.streamlit.app/#sentiment-distribution',
    githubUrl: 'https://github.com/AshuferMorningstar/Sentiment-Metrics-Quarterly-Dashboard',
  },
  {
    number: '04',
    title: 'AI AutoReply Bot',
    summary: 'Created a contextual WhatsApp Web assistant with chat-history prompting and an automated copy–generate–send loop.',
    tags: ['Python', 'OpenAI API', 'PyAutoGUI'],
    githubUrl: 'https://github.com/AshuferMorningstar/AI-AutoReply-Bot',
  },
  {
    number: '05',
    title: 'Jarvis Voice Assistant',
    summary: 'Designed a wake-word voice workflow for search, news, music playback, and fallback answers through OpenAI.',
    tags: ['Python', 'gTTS', 'NewsAPI', 'OpenAI API'],
    githubUrl: 'https://github.com/AshuferMorningstar/Jarvis',
  },
  {
    number: '06',
    title: 'AI Mock Interview Platform',
    summary: 'Orchestrated resume extraction, real-time speech loops, and automated evaluation feedback for practice interviews.',
    tags: ['Express.js', 'Gemini', 'ElevenLabs', 'Web Speech API'],
    githubUrl: 'https://github.com/AshuferMorningstar/-code.arr',
  },
  {
    number: '07',
    title: 'Calorie Wise',
    summary: 'Built an installable nutrition and fitness PWA for meal logging, Indian-food search, recipes, workouts, goals, and AI-assisted nutrition lookup.',
    tags: ['React', 'Vite', 'Firebase', 'OpenRouter', 'PWA'],
    liveUrl: 'https://calorie-wise-vert.vercel.app',
    githubUrl: 'https://github.com/AshuferMorningstar/Calorie-Tracker',
  },
  {
    number: '08',
    title: 'Mafia Real-Time Game',
    summary: 'Created a multiplayer Werewolf-style game with live rooms, secret roles, phase orchestration, team chat, voting, and SQLite chat history.',
    tags: ['FastAPI', 'Socket.IO', 'React', 'SQLite'],
    liveUrl: 'https://mafia-git-main-ashufer-morningstars-projects.vercel.app',
    githubUrl: 'https://github.com/AshuferMorningstar/Mafia',
  },
  {
    number: '09',
    title: 'Pop Balloons Game',
    summary: 'Developed a PyQt6 arcade game with score-based difficulty, bomb balloons, pause and mute controls, sound effects, and looping music.',
    tags: ['Python', 'PyQt6', 'QPainter', 'Audio'],
    githubUrl: 'https://github.com/AshuferMorningstar/pop-baloons-game',
  },
]

const skillGroups = [
  { icon: Terminal, label: 'Core', items: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'HTML5', 'CSS'] },
  { icon: BrainCircuit, label: 'AI & APIs', items: ['ChatGPT', 'Gemini API', 'OpenAI API', 'ElevenLabs'] },
  { icon: WandSparkles, label: 'AI Systems', items: ['LangChain', 'LangGraph', 'RAG', 'Vectorless RAG', 'Deep Agents', 'Guardrails', 'LLM Evaluation', 'LLM Gateways'] },
  { icon: Database, label: 'Tools', items: ['Git', 'GitHub', 'GitHub Copilot', 'Google Sheets'] },
  { icon: GitBranch, label: 'DevOps', items: ['CI/CD', 'Docker', 'GitHub Actions', 'Deployment workflows'] },
  { icon: WandSparkles, label: 'Workflow', items: ['Prompt design', 'AI-assisted debugging', 'API integration', 'Output evaluation'] },
]

export default function Page() {
  const [copied, setCopied] = useState(false)
  const [photoOpen, setPhotoOpen] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText('ashufer1211@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-[#eef5fb] selection:bg-cyan-300 selection:text-[#07111f]">
      <div className="pointer-events-none fixed inset-0 opacity-60 [background-image:linear-gradient(rgba(119,195,215,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(119,195,215,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none fixed left-1/2 top-[-240px] size-[560px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-10">
        <nav className="mb-12 flex items-center justify-between border-b border-white/10 pb-5 text-xs uppercase tracking-[0.22em] text-slate-400">
          <span className="font-semibold text-cyan-300">AK / AI TRAINER CARD</span>
          <div className="flex items-center gap-5">
            <a className="transition-colors hover:text-cyan-300" href="#work">Work</a>
            <a className="transition-colors hover:text-cyan-300" href="#skills">Skills</a>
            <a className="transition-colors hover:text-cyan-300" href="mailto:ashufer1211@gmail.com">Contact</a>
          </div>
        </nav>

        <section className="relative min-h-[590px] overflow-visible pb-20">
          <button type="button" aria-label="View larger profile photo" onClick={() => setPhotoOpen(true)} className="group absolute right-[-2rem] top-[-2.5rem] z-0 block h-[620px] w-[58%] cursor-zoom-in text-left sm:right-[-1rem] lg:right-[-3rem] lg:h-[680px]">
            <div className="absolute inset-10 rounded-full bg-cyan-300/10 blur-3xl transition-opacity group-hover:opacity-80" />
            <img src="/profile-photo.jpeg" alt="Ashutosh Kumar" width="1182" height="665" className="relative h-full w-full object-contain object-center opacity-80 drop-shadow-[0_24px_45px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.02]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#07111f] via-[#07111f]/75 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#07111f] to-transparent" />
          </button>
          <div className="relative z-10 max-w-2xl pt-16 lg:pt-20">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium tracking-[0.16em] text-cyan-200">
                <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" /> AVAILABLE FOR OPPORTUNITIES
              </div>
              <p className="mb-4 font-mono text-sm tracking-[0.16em] text-cyan-300">HELLO, I&apos;M</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">Ashutosh<br /><span className="text-cyan-300">Kumar.</span></h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">AI Trainer &amp; Engineer in the making — turning data, APIs, and human feedback into useful, measurable systems.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-3">
                  <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#07111f] transition-transform hover:-translate-y-0.5">Explore projects <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
                  <a href="https://www.linkedin.com/in/ashutosh-kumar-139b6a258" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"><Network /> LinkedIn</a>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-400">
                  <a className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-200" href="mailto:ashufer1211@gmail.com"><Mail className="size-3.5 text-cyan-300" /> ashufer1211@gmail.com</a>
                  <a className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-200" href="tel:+918936840174"><Phone className="size-3.5 text-cyan-300" /> +91 8936840174</a>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-cyan-300" /> Kolkata, India</span>
                  <button aria-label="Copy email address" onClick={copyEmail} className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-cyan-300">{copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />} {copied ? 'Copied' : 'Copy email'}</button>
                </div>
              </div>
            </div>
        </section>

        <section className="-mt-10 grid gap-6 border-y border-white/10 py-10 sm:grid-cols-3">
          <div><p className="text-4xl font-semibold text-cyan-300">09</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">Featured builds</p></div>
          <div><p className="text-4xl font-semibold text-cyan-300">10K+</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">Job records analyzed</p></div>
          <div><p className="text-4xl font-semibold text-cyan-300">2026</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">B.Tech graduation</p></div>
        </section>

        <section id="work" className="py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-3 font-mono text-sm text-cyan-300">/ SELECTED WORK</p><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Built with intent.</h2></div><a href={githubRepos} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-200">Browse GitHub repositories <ExternalLink /></a></div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => <article key={project.number} className="group flex min-h-[260px] flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition-all hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] sm:p-7"><div><div className="mb-8 flex items-center justify-between"><span className="font-mono text-sm text-cyan-300">{project.number}</span><div className="flex items-center gap-3"><a aria-label={`View ${project.title} live`} href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-500 transition-colors hover:text-cyan-300"><ExternalLink /></a><a aria-label={`View ${project.title} on GitHub`} href={project.githubUrl ?? githubRepos} target="_blank" rel="noreferrer" className="text-slate-500 transition-colors hover:text-cyan-300"><GitBranch /></a></div></div><h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{project.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">{project.summary}</p></div><div className="mt-8 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400">{tag}</span>)}</div></article>)}
          </div>
        </section>

        <section id="skills" className="grid gap-10 border-t border-white/10 py-20 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-3 font-mono text-sm text-cyan-300">/ TOOLKIT</p><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Curious by default.</h2><p className="mt-5 max-w-sm leading-7 text-slate-400">I use AI as a development partner, then test, review, and refine the output until it earns its place in the system.</p></div><div className="grid gap-3 sm:grid-cols-2">{skillGroups.map(({ icon: Icon, label, items }) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><Icon className="mb-8 text-cyan-300" /><p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p><div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="text-sm text-slate-200">{item}<span className="ml-2 text-cyan-300/50">/</span></span>)}</div></div>)}</div></section>

        <section className="border-t border-white/10 py-20"><div className="grid gap-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="mb-3 font-mono text-sm text-cyan-300">/ EXPERIENCE</p><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Handshake AI Fellowship.</h2><p className="mt-4 max-w-md leading-7 text-slate-300">Contributed to recent Dynamo projects focused on training and evaluating AI models.</p></div><div className="flex flex-col gap-4 text-sm leading-6 text-slate-300"><div className="flex gap-3"><Check className="mt-1 shrink-0 text-cyan-300" /><span>Completed structured tasks designed to stump AI models and expose reasoning gaps.</span></div><div className="flex gap-3"><Check className="mt-1 shrink-0 text-cyan-300" /><span>Applied careful prompt interpretation, edge-case analysis, and quality-focused review to improve model outputs.</span></div><div className="flex gap-3"><Check className="mt-1 shrink-0 text-cyan-300" /><span>Strengthened practical experience in human feedback, benchmark-style evaluation, and AI-assisted problem solving.</span></div></div></div></section>

        <section className="grid gap-6 border-t border-white/10 py-20 md:grid-cols-2"><div><p className="mb-3 font-mono text-sm text-cyan-300">/ EDUCATION</p><div className="flex gap-4"><BookOpen className="mt-1 shrink-0 text-cyan-300" /><div><h2 className="text-2xl font-semibold">Bachelor of Technology</h2><p className="mt-2 text-slate-400">Computer Science and Business Systems</p><p className="mt-1 text-sm text-slate-500">Techno India University · Graduation 2026</p></div></div></div><div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-6"><p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Beyond the build</p><p className="mt-4 leading-7 text-slate-300">English (Professional) · Hindi (Native)<br />Visual storytelling · Digital art · Content creation · Video editing</p></div></section>

        <footer className="flex flex-col justify-between gap-5 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center"><span>© 2026 Ashutosh Kumar</span><a href="mailto:ashufer1211@gmail.com" className="text-cyan-300 hover:text-cyan-200">Let&apos;s build something useful ↗</a></footer>
      </div>

      {photoOpen && (
        <div role="dialog" aria-modal="true" aria-label="Larger profile photo" className="fixed inset-0 z-50 flex items-center justify-center bg-[#020711]/90 p-5 backdrop-blur-sm" onClick={() => setPhotoOpen(false)}>
          <button type="button" onClick={() => setPhotoOpen(false)} aria-label="Close larger profile photo" className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-2 text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"><X /></button>
          <img src="/profile-photo.jpeg" alt="Ashutosh Kumar" width="1182" height="665" className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl shadow-black/50" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  )
}
