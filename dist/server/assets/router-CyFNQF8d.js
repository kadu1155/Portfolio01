import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, Suspense, useRef, useState } from "react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Icosahedron, MeshDistortMaterial, Torus, Sphere } from "@react-three/drei";
import { Moon, Sun, Rocket, FileDown, Mail, Code2, Sparkles, Server, Database, ExternalLink, Heart, Star, Award, Phone, Github, Linkedin, Download } from "lucide-react";
const appCss = "/assets/styles-CTc-HSoz.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function FloatingShape({ position, color, shape = "ico", scale = 1 }) {
  const ref = useRef(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return /* @__PURE__ */ jsxs(Float, { speed: 2, rotationIntensity: 1, floatIntensity: 2, children: [
    shape === "ico" && /* @__PURE__ */ jsx(Icosahedron, { ref, args: [scale, 0], position, children: /* @__PURE__ */ jsx(MeshDistortMaterial, { color, distort: 0.3, speed: 2, roughness: 0.1, metalness: 0.6 }) }),
    shape === "torus" && /* @__PURE__ */ jsx(Torus, { ref, args: [scale, scale * 0.3, 16, 64], position, children: /* @__PURE__ */ jsx("meshStandardMaterial", { color, roughness: 0.2, metalness: 0.7, emissive: color, emissiveIntensity: 0.3 }) }),
    shape === "sphere" && /* @__PURE__ */ jsx(Sphere, { ref, args: [scale, 32, 32], position, children: /* @__PURE__ */ jsx(MeshDistortMaterial, { color, distort: 0.4, speed: 1.5, roughness: 0.1, metalness: 0.5 }) })
  ] });
}
function Scene3D() {
  return /* @__PURE__ */ jsx(Canvas, { camera: { position: [0, 0, 8], fov: 50 }, dpr: [1, 2], children: /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
    /* @__PURE__ */ jsx("ambientLight", { intensity: 0.4 }),
    /* @__PURE__ */ jsx("pointLight", { position: [10, 10, 10], intensity: 1.5, color: "#ffb3d9" }),
    /* @__PURE__ */ jsx("pointLight", { position: [-10, -5, 5], intensity: 1, color: "#b794f6" }),
    /* @__PURE__ */ jsx("pointLight", { position: [0, 5, -5], intensity: 0.8, color: "#7dd3fc" }),
    /* @__PURE__ */ jsx(FloatingShape, { position: [-3.5, 1.8, 0], color: "#f0abfc", shape: "ico", scale: 0.7 }),
    /* @__PURE__ */ jsx(FloatingShape, { position: [3.8, -1.2, -1], color: "#c4b5fd", shape: "torus", scale: 0.5 }),
    /* @__PURE__ */ jsx(FloatingShape, { position: [-2.5, -2, 1], color: "#7dd3fc", shape: "sphere", scale: 0.4 }),
    /* @__PURE__ */ jsx(FloatingShape, { position: [3, 2.5, -2], color: "#fbcfe8", shape: "ico", scale: 0.55 }),
    /* @__PURE__ */ jsx(FloatingShape, { position: [-4.2, -0.5, -1.5], color: "#a5f3fc", shape: "torus", scale: 0.35 }),
    /* @__PURE__ */ jsx(FloatingShape, { position: [4.5, 0.8, 0.5], color: "#e9d5ff", shape: "sphere", scale: 0.45 }),
    /* @__PURE__ */ jsx(Stars, { radius: 50, depth: 50, count: 1500, factor: 3, saturation: 0.5, fade: true, speed: 1 })
  ] }) });
}
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      onMouseMove: (e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      },
      onMouseLeave: () => {
        x.set(0);
        y.set(0);
      },
      style: { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" },
      className,
      children
    }
  );
}
function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const saved = localStorage.getItem("theme") ?? "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: toggle,
      "aria-label": `Switch to ${isDark ? "light" : "dark"} mode`,
      "aria-pressed": isDark,
      className: "relative w-14 h-8 rounded-full glass flex items-center px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-button shadow-soft flex items-center justify-center transition-transform duration-300 ${isDark ? "translate-x-0" : "translate-x-6"}`,
            "aria-hidden": "true",
            children: isDark ? /* @__PURE__ */ jsx(Moon, { className: "w-3.5 h-3.5 text-primary-foreground" }) : /* @__PURE__ */ jsx(Sun, { className: "w-3.5 h-3.5 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  );
}
const avatarImg = "/assets/avatar-6yn1D9W_.png";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kadambari Galinde — Full Stack Developer Portfolio" },
      { name: "description", content: "Full Stack Developer specializing in Python, JavaScript, REST APIs, and scalable backend systems. Hackathon winner. Let's build something cute together." },
      { property: "og:title", content: "Kadambari Galinde — Full Stack Developer" },
      { property: "og:description", content: "Cute 3D portfolio of a passionate Computer Engineering student crafting beautiful, scalable web experiences." }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap" }
    ]
  }),
  component: Portfolio
});
const skills = [
  { cat: "Languages", icon: Code2, items: ["Python", "JavaScript", "Java", "C#"] },
  { cat: "Frontend", icon: Sparkles, items: ["HTML5", "CSS3", "React", "JavaScript"] },
  { cat: "Backend", icon: Server, items: ["FastAPI", "Flask", "Spring Boot", "ASP.NET Core"] },
  { cat: "Databases", icon: Database, items: ["MySQL", "SQL Server", "REST APIs", "JWT / OAuth"] }
];
const projects = [
  { name: "Magic Expense Splitter", tech: "JavaScript", desc: "Dynamic web app with real-time expense calculation, clean UI, and proper frontend-backend separation.", link: "https://github.com/kadu1155/magic-expense-splitter" },
  { name: "Library Management System", tech: "Java • JDBC • MySQL", desc: "Relational schema design with full CRUD and a complete book issue-return workflow using OOP principles." },
  { name: "Advanced Notepad", tech: "Python", desc: "Modular desktop app with robust file handling, error management, and clean architecture." },
  { name: "Mangal Moti Website", tech: "HTML • CSS • Ongoing", desc: "Responsive marketing website with a structured, optimized UI layout." }
];
const achievements = [
  { icon: Rocket, title: "1st Place — Aetheron 2026 Hackathon", tone: "from-pink-glow to-secondary" },
  { icon: Heart, title: "Best Social Impact Idea — NextGen Pitching", tone: "from-secondary to-accent" },
  { icon: Star, title: "Sustainovation 2025 Hackathon", tone: "from-accent to-pink-glow" },
  { icon: Award, title: "Deloitte Job Simulation • Forage", tone: "from-pink-glow to-accent" },
  { icon: Sparkles, title: "IBM SkillsBuild — LLM Basics", tone: "from-secondary to-pink-glow" },
  { icon: Sparkles, title: "IBM — RAG with LangChain", tone: "from-accent to-secondary" }
];
function Portfolio() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-gradient-button focus:text-primary-foreground focus:font-semibold",
        children: "Skip to main content"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.nav,
      {
        initial: { y: -40, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        "aria-label": "Primary",
        className: "fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 flex items-center gap-1 shadow-soft",
        children: [
          ["About", "Skills", "Projects", "Awards", "Contact"].map((s) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `#${s.toLowerCase()}`,
              className: "px-4 py-1.5 text-sm rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              children: s
            },
            s
          )),
          /* @__PURE__ */ jsx("span", { className: "mx-1 h-5 w-px bg-border", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx(ThemeToggle, {})
        ]
      }
    ),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "hero-title", className: "relative min-h-screen flex items-center overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero-glow", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-90", "aria-hidden": "true", children: /* @__PURE__ */ jsx(Scene3D, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -40 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-accent animate-sparkle" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Available for opportunities" })
                ] }),
                /* @__PURE__ */ jsxs("h1", { id: "hero-title", className: "text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6", children: [
                  "Hi, I'm ",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Kadambari" }),
                  " ",
                  /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "✨" })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed", children: [
                  "A Computer Engineering student crafting ",
                  /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "scalable full-stack apps" }),
                  " with Python, JavaScript, and a little bit of magic. ",
                  /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "🪄" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxs("a", { href: "#projects", className: "group inline-flex items-center gap-2 bg-gradient-button text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-soft hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", children: [
                    "See my work ",
                    /* @__PURE__ */ jsx(Rocket, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform", "aria-hidden": "true" })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "/Kadambari-Galinde-Resume.pdf",
                      download: "Kadambari-Galinde-Resume.pdf",
                      "aria-label": "Download Kadambari's resume as PDF",
                      className: "inline-flex items-center gap-2 bg-foreground/5 glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      children: [
                        /* @__PURE__ */ jsx(FileDown, { className: "w-4 h-4", "aria-hidden": "true" }),
                        " Download Resume"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: [
                    /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4", "aria-hidden": "true" }),
                    " Hire me"
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.85 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1, delay: 0.2 },
              className: "relative flex justify-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-pink-glow/40 to-secondary/40 blur-3xl rounded-full" }),
                /* @__PURE__ */ jsx(
                  motion.img,
                  {
                    src: avatarImg,
                    alt: "Cute tech girl avatar of Kadambari",
                    width: 1024,
                    height: 1536,
                    className: "relative w-full max-w-md drop-shadow-[0_30px_60px_rgba(244,114,182,0.35)] animate-float-slow"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    animate: { y: [0, -15, 0] },
                    transition: { duration: 4, repeat: Infinity },
                    className: "absolute top-12 -left-2 glass rounded-2xl px-3 py-2 text-sm shadow-soft",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-accent", children: "</>" }),
                      " Full Stack"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { y: [0, 12, 0] },
                    transition: { duration: 3.5, repeat: Infinity, delay: 0.5 },
                    className: "absolute bottom-20 -right-2 glass rounded-2xl px-3 py-2 text-sm shadow-soft",
                    children: "🏆 Hackathon Winner"
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { y: [0, -10, 0] },
                    transition: { duration: 5, repeat: Infinity, delay: 1 },
                    className: "absolute top-1/2 -right-6 glass rounded-2xl px-3 py-2 text-sm shadow-soft",
                    children: "✨ React • FastAPI"
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-28 container mx-auto px-6", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-3xl mx-auto text-center",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent mb-4", children: "About me" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
              "Building ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "clean code" }),
              " with a kawaii touch"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground leading-relaxed", children: [
              "I'm a detail-oriented Computer Engineering student at Alard University focused on full-stack development. I love designing relational schemas, wiring up REST APIs, and turning messy ideas into",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "scalable, maintainable" }),
              " systems. When I'm not coding, I'm probably winning hackathons. 💖"
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("section", { id: "skills", className: "relative py-20 container mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent mb-3", children: "Tech stack" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: [
            "My ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "superpowers" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1200px]", children: skills.map((s, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            children: /* @__PURE__ */ jsxs(TiltCard, { className: "glass rounded-3xl p-6 h-full shadow-card hover:shadow-soft transition-shadow", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-gradient-button flex items-center justify-center mb-4 shadow-soft", children: /* @__PURE__ */ jsx(s.icon, { className: "w-6 h-6 text-primary-foreground" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: s.cat }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: s.items.map((it) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
                it
              ] }, it)) })
            ] })
          },
          s.cat
        )) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "projects", className: "relative py-28 container mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent mb-3", children: "Featured work" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: [
            "Projects I'm ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "proud of" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
          motion.a,
          {
            href: p.link ?? "#",
            target: p.link ? "_blank" : void 0,
            rel: "noreferrer",
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "group glass rounded-3xl p-8 shadow-card hover:-translate-y-2 hover:shadow-soft transition-all relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-pink-glow/30 to-secondary/30 blur-2xl group-hover:scale-150 transition-transform duration-700" }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: p.name }),
                  p.link && /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-accent mb-4", children: p.tech }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: p.desc })
              ] })
            ]
          },
          p.name
        )) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "awards", className: "relative py-28 container mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent mb-3", children: "Wins & certifications" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: [
            "Some ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "sparkles" }),
            " ✨"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: achievements.map((a, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            className: "glass rounded-2xl p-5 flex items-center gap-4 shadow-soft hover:bg-white/5 transition-colors",
            children: [
              /* @__PURE__ */ jsx("div", { className: `w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${a.tone} flex items-center justify-center`, children: /* @__PURE__ */ jsx(a.icon, { className: "w-6 h-6 text-primary-foreground" }) }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: a.title })
            ]
          },
          a.title
        )) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-28 container mx-auto px-6", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "relative max-w-4xl mx-auto glass rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden shadow-card",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero-glow opacity-60" }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
                  "Let's build something ",
                  /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "adorable" }),
                  " together"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-10 max-w-xl mx-auto", children: "Looking for an intern or junior full-stack engineer who ships clean code and cares about details? You found her. 💌" }),
                /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8", children: [
                  /* @__PURE__ */ jsxs("a", { href: "mailto:kadambarigalinde43@gmail.com", className: "glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors text-left", children: [
                    /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-primary" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Email" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: "kadambarigalinde43@gmail.com" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "tel:9923772005", className: "glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors text-left", children: [
                    /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-primary" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Phone" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "+91 99237 72005" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "https://github.com/kadu1155", target: "_blank", rel: "noreferrer", className: "glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors text-left", children: [
                    /* @__PURE__ */ jsx(Github, { className: "w-5 h-5 text-primary" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "GitHub" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "@kadu1155" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/kadambari-galinde3bb322330", target: "_blank", rel: "noreferrer", className: "glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors text-left", children: [
                    /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5 text-primary" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "LinkedIn" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Kadambari Galinde" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "mailto:kadambarigalinde43@gmail.com",
                    className: "inline-flex items-center gap-2 bg-gradient-button text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-soft hover:scale-105 transition-transform",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                      " Get in touch"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-muted-foreground mt-10", children: [
          "Made with ",
          /* @__PURE__ */ jsx("span", { "aria-label": "love", children: "💖" }),
          " by Kadambari • © 2026"
        ] })
      ] })
    ] })
  ] });
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
