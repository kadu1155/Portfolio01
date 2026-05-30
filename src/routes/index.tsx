import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Scene3D } from "@/components/Scene3D";
import { TiltCard } from "@/components/TiltCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import avatarImg from "@/assets/avatar.png";
import {
  Sparkles, Code2, Database, Server, Github, Linkedin, Mail, Phone,
  Award, Rocket, Heart, Star, ExternalLink, Download, FileDown
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kadambari Galinde — Full Stack Developer Portfolio" },
      { name: "description", content: "Full Stack Developer specializing in Python, JavaScript, REST APIs, and scalable backend systems. Hackathon winner. Let's build something cute together." },
      { property: "og:title", content: "Kadambari Galinde — Full Stack Developer" },
      { property: "og:description", content: "Cute 3D portfolio of a passionate Computer Engineering student crafting beautiful, scalable web experiences." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { cat: "Languages", icon: Code2, items: ["Python", "JavaScript", "Java", "C#"] },
  { cat: "Frontend", icon: Sparkles, items: ["HTML5", "CSS3", "React", "JavaScript"] },
  { cat: "Backend", icon: Server, items: ["FastAPI", "Flask", "Spring Boot", "ASP.NET Core"] },
  { cat: "Databases", icon: Database, items: ["MySQL", "SQL Server", "REST APIs", "JWT / OAuth"] },
];

const projects = [
  { name: "Magic Expense Splitter", tech: "JavaScript", desc: "Dynamic web app with real-time expense calculation, clean UI, and proper frontend-backend separation.", link: "https://github.com/kadu1155/magic-expense-splitter" },
  { name: "Library Management System", tech: "Java • JDBC • MySQL", desc: "Relational schema design with full CRUD and a complete book issue-return workflow using OOP principles." },
  { name: "Advanced Notepad", tech: "Python", desc: "Modular desktop app with robust file handling, error management, and clean architecture." },
  { name: "Mangal Moti Website", tech: "HTML • CSS • Ongoing", desc: "Responsive marketing website with a structured, optimized UI layout." },
];

const achievements = [
  { icon: Rocket, title: "1st Place — Aetheron 2026 Hackathon", tone: "from-pink-glow to-secondary" },
  { icon: Heart, title: "Best Social Impact Idea — NextGen Pitching", tone: "from-secondary to-accent" },
  { icon: Star, title: "Sustainovation 2025 Hackathon", tone: "from-accent to-pink-glow" },
  { icon: Award, title: "Deloitte Job Simulation • Forage", tone: "from-pink-glow to-accent" },
  { icon: Sparkles, title: "IBM SkillsBuild — LLM Basics", tone: "from-secondary to-pink-glow" },
  { icon: Sparkles, title: "IBM — RAG with LangChain", tone: "from-accent to-secondary" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Skip to content for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-gradient-button focus:text-primary-foreground focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Floating nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        aria-label="Primary"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 flex items-center gap-1 shadow-soft"
      >
        {["About", "Skills", "Projects", "Awards", "Contact"].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="px-4 py-1.5 text-sm rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {s}
          </a>
        ))}
        <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
        <ThemeToggle />
      </motion.nav>

      <main id="main-content">
      {/* HERO */}
      <section aria-labelledby="hero-title" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 opacity-90" aria-hidden="true">
          <Scene3D />
        </div>


        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-sparkle" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>
            <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
              Hi, I'm <br />
              <span className="text-gradient">Kadambari</span> <span aria-hidden="true">✨</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              A Computer Engineering student crafting <span className="text-foreground font-medium">scalable full-stack apps</span> with Python, JavaScript, and a little bit of magic. <span aria-hidden="true">🪄</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 bg-gradient-button text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-soft hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                See my work <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="/Kadambari-Galinde-Resume.pdf"
                download="Kadambari-Galinde-Resume.pdf"
                aria-label="Download Kadambari's resume as PDF"
                className="inline-flex items-center gap-2 bg-foreground/5 glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" /> Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Mail className="w-4 h-4" aria-hidden="true" /> Hire me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-glow/40 to-secondary/40 blur-3xl rounded-full" />
            <motion.img
              src={avatarImg}
              alt="Cute tech girl avatar of Kadambari"
              width={1024}
              height={1536}
              className="relative w-full max-w-md drop-shadow-[0_30px_60px_rgba(244,114,182,0.35)] animate-float-slow"
            />
            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-12 -left-2 glass rounded-2xl px-3 py-2 text-sm shadow-soft"
            >
              <span className="text-accent">{"</>"}</span> Full Stack
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 -right-2 glass rounded-2xl px-3 py-2 text-sm shadow-soft"
            >
              🏆 Hackathon Winner
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 -right-6 glass rounded-2xl px-3 py-2 text-sm shadow-soft"
            >
              ✨ React • FastAPI
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">About me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building <span className="text-gradient">clean code</span> with a kawaii touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a detail-oriented Computer Engineering student at Alard University focused on full-stack development.
            I love designing relational schemas, wiring up REST APIs, and turning messy ideas into{" "}
            <span className="text-foreground">scalable, maintainable</span> systems. When I'm not coding, I'm probably winning hackathons. 💖
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-20 container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">Tech stack</p>
          <h2 className="text-4xl md:text-5xl font-bold">My <span className="text-gradient">superpowers</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1200px]">
          {skills.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard className="glass rounded-3xl p-6 h-full shadow-card hover:shadow-soft transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-gradient-button flex items-center justify-center mb-4 shadow-soft">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.cat}</h3>
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-28 container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">Featured work</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects I'm <span className="text-gradient">proud of</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link ?? "#"}
              target={p.link ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-3xl p-8 shadow-card hover:-translate-y-2 hover:shadow-soft transition-all relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-pink-glow/30 to-secondary/30 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  {p.link && <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />}
                </div>
                <p className="text-xs uppercase tracking-wider text-accent mb-4">{p.tech}</p>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="relative py-28 container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">Wins & certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold">Some <span className="text-gradient">sparkles</span> ✨</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 flex items-center gap-4 shadow-soft hover:bg-white/5 transition-colors"
            >
              <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${a.tone} flex items-center justify-center`}>
                <a.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="font-medium">{a.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-28 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto glass rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden shadow-card"
        >
          <div className="absolute inset-0 bg-hero-glow opacity-60" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's build something <span className="text-gradient">adorable</span> together
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Looking for an intern or junior full-stack engineer who ships clean code and cares about details? You found her. 💌
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
              <a href="mailto:kadambarigalinde43@gmail.com" className="glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors text-left">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium truncate">kadambarigalinde43@gmail.com</p>
                </div>
              </a>
              <a href="tel:9923772005" className="glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors text-left">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+91 99237 72005</p>
                </div>
              </a>
              <a href="https://github.com/kadu1155" target="_blank" rel="noreferrer" className="glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors text-left">
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium">@kadu1155</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kadambari-galinde3bb322330" target="_blank" rel="noreferrer" className="glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors text-left">
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium">Kadambari Galinde</p>
                </div>
              </a>
            </div>
            <a
              href="mailto:kadambarigalinde43@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-soft hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" /> Get in touch
            </a>
          </div>
        </motion.div>
        <p className="text-center text-sm text-muted-foreground mt-10">
          Made with <span aria-label="love">💖</span> by Kadambari • © 2026
        </p>
      </section>
      </main>
    </div>
  );
}
