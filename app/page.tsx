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
  Sparkles,
  Terminal,
  WandSparkles,
} from 'lucide-react'
import { useState } from 'react'

const githubRepos = 'https://github.com/AshuferMorningstar?tab=repositories'

const projects = [
  {
    number: '01',
    title: 'SQL Data Job Market Analysis',
    summary: 'Mapped 10,000+ global analyst postings to uncover salary, regional, remote-work, and skill-learning patterns.',
    tags: ['Python', 'SQL', 'PostgreSQL', 'GitHub Copilot'],
  },
  {
    number: '02',
    title: 'Revenue Leakage Automation',
    summary: 'Built a Python reporting pipeline that validates transaction logs and flags mismatches beyond a 1% variance ceiling.',
    tags: ['Python', 'Automation', 'Data Quality'],
  },
  {
    number: '03',
    title: 'Sentiment Metrics Dashboard',
    summary: 'Combined API ingestion, Gemini sentiment scoring, and interactive KPI views into one modular analytics workflow.',
    tags: ['Python', 'Gemini API', 'Analytics'],
  },
  {
    number: '04',
    title: 'AI AutoReply Bot',
    summary: 'Created a contextual WhatsApp Web assistant with chat-history prompting and an automated copy–generate–send loop.',
    tags: ['Python', 'OpenAI API', 'PyAutoGUI'],
  },
  {
    number: '05',
    title: 'Jarvis Voice Assistant',
    summary: 'Designed a wake-word voice workflow for search, news, music playback, and fallback answers through OpenAI.',
    tags: ['Python', 'gTTS', 'NewsAPI', 'OpenAI API'],
  },
  {
    number: '06',
    title: 'AI Mock Interview Platform',
    summary: 'Orchestrated resume extraction, real-time speech loops, and automated evaluation feedback for practice interviews.',
    tags: ['Express.js', 'Gemini', 'ElevenLabs', 'Web Speech API'],
  },
  {
    number: '07',
    title: 'Calorie Wise',
    summary: 'Built an installable nutrition and fitness PWA for meal logging, Indian-food search, recipes, workouts, goals, and AI-assisted nutrition lookup.',
    tags: ['React', 'Vite', 'Firebase', 'OpenRouter', 'PWA'],
  },
  {
    number: '08',
    title: 'Mafia Real-Time Game',
    summary: 'Created a multiplayer Werewolf-style game with live rooms, secret roles, phase orchestration, team chat, voting, and SQLite chat history.',
    tags: ['FastAPI', 'Socket.IO', 'React', 'SQLite'],
  },
  {
    number: '09',
    title: 'Pop Balloons Game',
    summary: 'Developed a PyQt6 arcade game with score-based difficulty, bomb balloons, pause and mute controls, sound effects, and looping music.',
    tags: ['Python', 'PyQt6', 'QPainter', 'Audio'],
  },
]

const skillGroups = [
  { icon: Terminal, label: 'Core', items: ['Python', 'SQL', 'PostgreSQL'] },
  { icon: BrainCircuit, label: 'AI & APIs', items: ['ChatGPT', 'Gemini API', 'OpenAI API', 'ElevenLabs'] },
  { icon: Database, label: 'Tools', items: ['Git', 'GitHub', 'GitHub Copilot', 'Google Sheets'] },
  { icon: WandSparkles, label: 'Workflow', items: ['Prompt design', 'AI-assisted debugging', 'API integration', 'Output evaluation'] },
]

export default function Page() {
  const [copied, setCopied] = useState(false)

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

        <section className="grid gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium tracking-[0.16em] text-cyan-200">
              <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" /> AVAILABLE FOR OPPORTUNITIES
            </div>
            <p className="mb-4 font-mono text-sm tracking-[0.16em] text-cyan-300">HELLO, I&apos;M</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">Ashutosh<br /><span className="text-cyan-300">Kumar.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">AI Trainer &amp; Engineer in the making — turning data, APIs, and human feedback into useful, measurable systems.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#07111f] transition-transform hover:-translate-y-0.5">Explore projects <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              <a href="https://www.linkedin.com/in/ashutosh-kumar-139b6a258" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"><Network /> LinkedIn</a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:p-8">
            <div className="mb-8 flex items-start justify-between"><div className="grid size-14 place-items-center rounded-2xl bg-cyan-300 text-xl font-bold text-[#07111f]">AK</div><Sparkles className="text-cyan-300" /></div>
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-slate-500">Profile / 2026</p>
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              <a className="flex items-center gap-3 hover:text-cyan-200" href="mailto:ashufer1211@gmail.com"><Mail className="text-cyan-300" /> ashufer1211@gmail.com</a>
              <a className="flex items-center gap-3 hover:text-cyan-200" href="tel:+918936840174"><Phone className="text-cyan-300" /> +91 8936840174</a>
              <span className="flex items-center gap-3"><MapPin className="text-cyan-300" /> Kolkata, West Bengal, India</span>
            </div>
            <div className="mt-8 flex gap-3 border-t border-white/10 pt-5">
              <a aria-label="GitHub profile" href="https://github.com/AshuferMorningstar" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2.5 text-slate-300 transition-colors hover:border-cyan-300 hover:text-cyan-300"><GitBranch /></a>
              <button aria-label="Copy email address" onClick={copyEmail} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-slate-400 transition-colors hover:border-cyan-300 hover:text-cyan-300">{copied ? <Check /> : <Copy />} {copied ? 'Copied' : 'Copy email'}</button>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 border-y border-white/10 py-10 sm:grid-cols-3">
          <div><p className="text-4xl font-semibold text-cyan-300">09</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">Featured builds</p></div>
          <div><p className="text-4xl font-semibold text-cyan-300">10K+</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">Job records analyzed</p></div>
          <div><p className="text-4xl font-semibold text-cyan-300">2026</p><p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">B.Tech graduation</p></div>
        </section>

        <section id="work" className="py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-3 font-mono text-sm text-cyan-300">/ SELECTED WORK</p><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Built with intent.</h2></div><a href={githubRepos} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-200">Browse GitHub repositories <ExternalLink /></a></div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => <article key={project.number} className="group flex min-h-[260px] flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition-all hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] sm:p-7"><div><div className="mb-8 flex items-center justify-between"><span className="font-mono text-sm text-cyan-300">{project.number}</span><a aria-label={`View ${project.title} on GitHub`} href={githubRepos} target="_blank" rel="noreferrer" className="text-slate-500 transition-colors hover:text-cyan-300"><GitBranch /></a></div><h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{project.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">{project.summary}</p></div><div className="mt-8 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400">{tag}</span>)}</div></article>)}
          </div>
        </section>

        <section id="skills" className="grid gap-10 border-t border-white/10 py-20 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-3 font-mono text-sm text-cyan-300">/ TOOLKIT</p><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Curious by default.</h2><p className="mt-5 max-w-sm leading-7 text-slate-400">I use AI as a development partner, then test, review, and refine the output until it earns its place in the system.</p></div><div className="grid gap-3 sm:grid-cols-2">{skillGroups.map(({ icon: Icon, label, items }) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><Icon className="mb-8 text-cyan-300" /><p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p><div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="text-sm text-slate-200">{item}<span className="ml-2 text-cyan-300/50">/</span></span>)}</div></div>)}</div></section>

        <section className="grid gap-6 border-t border-white/10 py-20 md:grid-cols-2"><div><p className="mb-3 font-mono text-sm text-cyan-300">/ EDUCATION</p><div className="flex gap-4"><BookOpen className="mt-1 shrink-0 text-cyan-300" /><div><h2 className="text-2xl font-semibold">Bachelor of Technology</h2><p className="mt-2 text-slate-400">Computer Science and Business Systems</p><p className="mt-1 text-sm text-slate-500">Techno India University · Graduation 2026 · 66.6%</p></div></div></div><div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-6"><p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Beyond the build</p><p className="mt-4 leading-7 text-slate-300">English (Professional) · Hindi (Native)<br />Visual storytelling · Digital art · Content creation · Video editing</p></div></section>

        <footer className="flex flex-col justify-between gap-5 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center"><span>© 2026 Ashutosh Kumar</span><a href="mailto:ashufer1211@gmail.com" className="text-cyan-300 hover:text-cyan-200">Let&apos;s build something useful ↗</a></footer>
      </div>
    </main>
  )
}
