
"use client";

import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiFirebase,
  SiAppwrite,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si';
import { FaWind, FaBolt, FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import React from 'react';
import Image from "next/image";
// CodeChef SVG icon
const CodeChefIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="16" rx="16" ry="16" fill="#5B4638" />
    <ellipse cx="16" cy="16" rx="13" ry="13" fill="#fff" />
    <ellipse cx="16" cy="16" rx="10" ry="10" fill="#5B4638" />
    <ellipse cx="16" cy="16" rx="7" ry="7" fill="#fff" />
    <ellipse cx="16" cy="16" rx="4" ry="4" fill="#5B4638" />
  </svg>
);
// Codeforces SVG icon
const CodeforcesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#1F8ACB" />
    <rect x="6" y="6" width="20" height="20" rx="10" fill="#fff" />
    <rect x="10" y="10" width="12" height="12" rx="6" fill="#F5C518" />
    <rect x="13" y="13" width="6" height="6" rx="3" fill="#1F8ACB" />
  </svg>
);

// --- Custom utility styles (you can move these to your globals.css) ---
const gradientText = "bg-gradient-to-r from-green via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(30,64,175,0.20)]";
const glassBg = "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg";
const cardHover = "hover:scale-105 hover:shadow-2xl transition-transform duration-200";
const animatedBorder = "relative before:absolute before:inset-0 before:rounded-[2.5rem] before:bg-gradient-to-tr before:from-green before:via-blue-400 before:to-purple-500 before:blur-xl before:opacity-40 before:z-0";

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col justify-center items-start px-8 md:px-32 pt-32 bg-gradient-to-br from-navy via-dark-navy to-black font-sans ${animatedBorder} overflow-x-hidden`}>
      {/* HEADER */}
      <header className={`w-full fixed top-0 left-0 z-50 bg-navy/80 backdrop-blur shadow-xl border-b`}>
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-8 py-6">
          {/* Logo */}
          {/* <div className="flex items-center justify-start flex-shrink-0">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="logo-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#64ffda" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#64ffda" stopOpacity="0.05"/>
                </radialGradient>
              </defs>
              <polygon points="24,4 44,14 44,34 24,44 4,34 4,14" stroke="#64ffda" strokeWidth="3" fill="url(#logo-grad)" />
              <text x="24" y="30" textAnchor="middle" fontSize="16" fill="#64ffda" fontFamily="monospace" fontWeight="bold" style={{letterSpacing: 2}}>DP</text>
            </svg>
          </div> */}
          {/* Navigation */}
          <nav className="flex-1 flex justify-center gap-8 md:gap-12 items-center text-lg md:text-lg font-mono text-lightest-slate whitespace-nowrap">
            <AnimatedNavLink href="#mail" index="01." text="Mail" />
            <AnimatedNavLink href="#coding-platforms" index="02." text="Coding Platforms" />
            <AnimatedNavLink href="#dev-platforms" index="03." text="Development Platforms" />
            <AnimatedNavLink href="#other-links" index="04." text="Other Links" />
          </nav>
          <div className="flex flex-row items-center gap-3 md:gap-6 ml-4 md:ml-8 whitespace-nowrap">
            <a
              href="https://github.com/divyanshu255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green text-2xl md:text-3xl transition-transform duration-200 hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/divyanshu-patel-6a9458227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-blue-400 text-2xl md:text-3xl transition-transform duration-200 hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Divyanshupatel_?t=AWfOz9J5DmP__m_AgSDGRw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-black text-2xl md:text-3xl transition-transform duration-200 hover:scale-125"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a href="#resume" className="bg-gradient-to-r from-green/80 via-blue-400/80 to-purple-500/80 border border-green text-green px-4 md:px-6 py-2 rounded transition font-mono text-base shadow-sm hover:bg-green hover:text-navy hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green/40 active:scale-95 duration-200">Resume</a>
          </div>
        </div>
      </header>
      <div className="h-20" />

      {/* HERO */}
      <section className="relative z-10 mb-32">
        <h2 className="text-green text-2xl mb-4 font-mono animate-fade-in-down">Hi, my name is</h2>
        <h1 className={`text-7xl md:text-8xl font-extrabold mb-4 ${gradientText} text-outline`}>Divyanshu Patel.</h1>
        <h2 className="text-5xl md:text-7xl font-bold text-slate mb-10 animate-fade-in-up">I build things for the mobile.</h2>
        <p className="max-w-2xl text-2xl md:text-3xl text-slate mb-12 animate-fade-in">
          I&apos;m a full stack mobile developer specializing in building cross-platform applications using <span className="font-bold text-green">React Native</span> and <span className="font-bold text-green">Expo</span>. With experience in <span className="font-bold text-green">Node.js</span>, <span className="font-bold text-green">JavaScript</span>, <span className="font-bold text-green">TypeScript</span>, and <span className="font-bold text-green">C++</span>.
        </p>
        <a
          href="#projects"
          className="border border-green bg-gradient-to-r from-green/10 via-blue-400/5 to-purple-500/5 text-green text-xl px-8 py-4 rounded transition font-mono shadow-md hover:bg-green hover:text-navy hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green/40 active:scale-95 duration-200 animate-bounce"
        >
          Check out my work!
        </a>
      </section>

      {/* ABOUT ME */}
      <section id="about" className={`w-full max-w-6xl mt-96 ml-12 mb-20 min-h-screen ${glassBg} rounded-3xl shadow-2xl p-10 relative z-10`}>
        <h2 className="flex items-center text-4xl font-bold text-lightest-slate mb-10">
          <span className="text-green font-mono mr-4">01.</span> About Me
          <span className="flex-1 h-px bg-lightest-navy ml-4" />
        </h2>
        <hr className="border-t border-lightest-navy mb-10" />
        <div className="text-slate text-2xl space-y-8">
          <AboutMeParagraph>
            I&apos;m a <Highlight>4th-year B.Tech student</Highlight> passionate about building <Highlight>mobile-first, full stack applications</Highlight>. My journey into development began when I started experimenting with simple <Highlight>React Native</Highlight> apps — and that curiosity quickly turned into a full-blown passion. Once I discovered <Highlight>Expo</Highlight>, it unlocked a whole new level of speed and flexibility in my mobile development workflow.
          </AboutMeParagraph>
          <AboutMeParagraph>
            Over the years, I&apos;ve grown into a proficient <Highlight>full stack mobile developer</Highlight>, working with tools like <Highlight>React Native</Highlight>, <Highlight>Expo</Highlight>, <Highlight>Node.js</Highlight>, and <Highlight>TypeScript</Highlight>. Alongside that, I&apos;ve been deeply engaged in <Highlight>DSA</Highlight> and <Highlight>competitive programming</Highlight> in <Highlight>C++</Highlight>, which has sharpened my problem-solving skills and taught me how to write efficient, scalable code.
          </AboutMeParagraph>
          <AboutMeParagraph>
            I&apos;m also a big believer in using modern tools to move faster — whether it&apos;s <Highlight>ChatGPT</Highlight>, <Highlight>Cursor</Highlight>, <Highlight>Claude</Highlight>, <Highlight>Perplexity</Highlight>, or <Highlight>Windsurf</Highlight> — I leverage AI to prototype faster, solve bugs quicker, and build smarter.
          </AboutMeParagraph>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={`w-full max-w-6xl mt-2 ml-12 mb-40 min-h-screen ${glassBg} rounded-3xl shadow-2xl p-10 relative z-10`}>
        <h2 className="flex items-center text-4xl font-bold text-lightest-slate mb-10">
          <span className="text-green font-mono mr-4">02.</span> Skills
          <span className="flex-1 h-px bg-lightest-navy ml-4" />
        </h2>
        <hr className="border-t border-lightest-navy mb-10" />
        <div className="text-slate text-2xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-7xl mx-auto">
            <SkillCategory title="Languages" />
            <SkillCategory title="Frontend Frameworks & Tools" />
            <SkillCategory title="Backend Frameworks & Tools" />
            <SkillCategory title="Databases" />
            <SkillCategory title="UI Frameworks" />
            <SkillList>
              <Skill icon={<SiCplusplus className="text-blue-500 text-3xl" />} name="C++" />
              <Skill icon={<SiJavascript className="text-yellow-400 text-3xl" />} name="JavaScript" />
              <Skill icon={<SiTypescript className="text-blue-500 text-3xl" />} name="TypeScript" />
            </SkillList>
            <SkillList>
              <Skill icon={<SiReact className="text-cyan-400 text-3xl" />} name="React Native" />
              <Skill icon={<SiExpo className="text-white text-3xl" />} name="Expo" />
              <Skill icon={<SiReact className="text-cyan-400 text-3xl" />} name="React" />
              <Skill icon={<SiNextdotjs className="text-white text-3xl" />} name="Next" />
            </SkillList>
            <SkillList>
              <Skill icon={<SiNodedotjs className="text-green text-3xl" />} name="Node.js" />
              <Skill icon={<SiExpress className="text-green text-3xl" />} name="Express" />
              <Skill icon={<SiPostman className="text-green text-3xl" />} name="Postman" />
              <Skill icon={<SiFirebase className="text-green text-3xl" />} name="Firebase" />
              <Skill icon={<SiAppwrite className="text-green text-3xl" />} name="Appwrite" />
            </SkillList>
            <SkillList>
              <Skill icon={<SiMongodb className="text-green-600 text-3xl" />} name="MongoDB" />
              <Skill icon={<SiPostgresql className="text-blue-700 text-3xl" />} name="PostgreSQL" />
              <Skill icon={<FaBolt className="text-white text-3xl" />} name={<span className="text-white">Neon</span>} />
              <Skill icon={<SiSupabase className="text-green-500 text-3xl" />} name="Supabase" />
            </SkillList>
            <SkillList>
              <Skill icon={<SiTailwindcss className="text-cyan-400 text-3xl" />} name="Tailwind" />
              <Skill icon={<FaWind className="text-green-400 text-3xl" />} name="NativeWind" />
            </SkillList>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full max-w-7xl mt-32 ml-12 mb-40 relative z-10">
        <h2 className="flex items-center text-4xl font-bold text-lightest-slate mb-10">
          <span className="text-green font-mono mr-4">03.</span> Some Things I&apos;ve Built
          <span className="flex-1 h-px bg-lightest-navy ml-4" />
        </h2>
        <hr className="border-t border-lightest-navy mb-10" />
        <ProjectCard
          imgSrc="https://img.freepik.com/premium-vector/vector-illustration-two-people-casual-meeting-setting_844724-600.jpg"
          imgAlt="Bondly Screenshot"
          title="Bondly"
          description="A Social Media App where every thought finds a home and every image tells a story"
          tech={["ReactNative", "Expo", "Node.js", "Express", "MongoDB"]}
          github="https://github.com/divyanshu255/social"
          link="/project01"
          reverse={false}
          accent="text-blue-400"
        />
        <ProjectCard
          imgSrc="/project02/main.png"
          imgAlt="MealMuse Screenshot"
          title="MealMuse"
          description="Your Personal Recipe Planner. Plan meals effortlessly, discover new recipes, and save your favorites in one place. MealMuse helps you stay organized, eat better, and make cooking simple and enjoyable."
          tech={["Expo", "ReactNative", "NeonDB", "Clark", "API"]}
          github="https://github.com/divyanshu255/recepie-app"
          link="/project02"
          reverse={true}
          accent="text-green-700"
        />
        <ProjectCard
          imgSrc="https://img.icons8.com/?size=100&id=21746&format=png&color=000000"
          imgAlt="line-me"
          title="Line"
          description="A real-time chat app that brings conversations to life. Stay connected, share moments instantly, and chat without limits — wherever you are."
          tech={["Expo", "React Native", "Socket.io", "MongoDB"]}
          github="https://github.com/divyanshu255/chat-app1"
          link="/project03"
          reverse={false}
          accent="text-green"
        />
      </section>

      {/* Other Noteworthy Projects */}
      <section className="w-full max-w-7xl mx-auto mt-32 mb-40 relative z-10">
        <h2 className="text-center text-4xl font-bold text-lightest-slate mb-4">Other Noteworthy Projects</h2>
        <div className="text-center mb-12">
          <a href="#archive" className="text-green font-mono text-xl hover:underline">view the archive</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`rounded-xl p-8 ${glassBg} shadow-xl flex flex-col justify-between min-h-[18rem] ${cardHover}`}>
            <div className="flex items-center justify-between mb-6">
              <svg width="36" height="36" fill="none" stroke="#64ffda" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
              <a href="#" className="text-slate hover:text-green text-2xl"><FaExternalLinkAlt /></a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-lightest-slate mb-2">Ecommerce App</h3>
              <p className="text-slate mb-4">A modern ecommerce application with product listings, cart, and secure checkout. Built for performance and scalability.</p>
            </div>
            <div className="mt-4 text-slate font-mono text-sm flex flex-wrap gap-4">
              <span>Expo</span><span>Node.js</span><span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-green my-12 w-full max-w-7xl mx-auto" />
      <footer className="w-full flex justify-center items-center py-12 bg-navy relative z-10">
        <SiteVisits />
      </footer>

      {/* Decorative gradients and particles */}
      <AnimatedBackground />
    </main>
  );
}

// NAV LINK
function AnimatedNavLink({ href, index, text }: { href: string; index: string; text: string; }) {
  const [open, setOpen] = React.useState(false);
  // Emails for dropdown (for 01. Mail)
  const emails = [
    'divyanshupatel01234@gmail.com',
    'divyanshupatel.255@gmail.com',
    'divyanshu.2226it1156@kiet.edu',
  ];
  // Track which email was copied
  const [copiedIdx, setCopiedIdx] = React.useState<number | null>(null);
  // For showing/hiding copy button
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  // Copy to clipboard handler
  const handleCopy = async (email: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1200);
    } catch (e) {}
  };

  // Overlay click handler
  const handleOverlayClick = () => {
    setOpen(false);
    setHoveredIdx(null);
  };

  // Dropdown logic for Coding Platforms
  const isCoding = text === 'Coding Platforms';
  // Dropdown logic for Development Platforms
  const isDev = text === 'Development Platforms';

  return (
    <div
      className="relative group"
      style={{ zIndex: 50 }}
      onMouseEnter={() => { setOpen(true); }}
      onMouseLeave={() => { setOpen(false); setHoveredIdx(null); }}
    >
      {/* Overlay for dimming background when dropdown is open */}
      {(text === 'Mail' || isCoding || isDev) && open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={handleOverlayClick}
        />
      )}
      <a
        href={href}
        className={`relative transition duration-200 px-2 py-1 rounded ${open ? 'text-green bg-white/10' : 'hover:text-green'}`}
        style={{ zIndex: 60 }}
      >
        <span className="text-green">{index}</span> {text}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green via-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
      </a>
      {/* 01. Mail Dropdown */}
      {text === 'Mail' && (
        <div
          className={`absolute left-0 top-full mt-2 min-w-[320px] bg-navy/95 rounded-xl shadow-xl py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ${open ? 'opacity-100 pointer-events-auto' : ''}`}
          style={{ zIndex: 70 }}
        >
          {emails.map((email, idx) => (
            <div
              key={email}
              className={`flex items-center justify-between px-6 py-2 text-lightest-slate hover:bg-green/10 hover:text-green transition rounded-lg text-base whitespace-nowrap group/email cursor-pointer`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <span>
                {email}
                {idx === 0 && (
                  <span className="ml-2 text-xs text-slate-400 italic select-none">(main)</span>
                )}
              </span>
              <button
                className={`ml-4 px-3 py-1 rounded bg-green/10 text-green text-xs font-mono border border-green/30 opacity-0 group-hover/email:opacity-100 transition-opacity duration-200 ${hoveredIdx === idx ? 'opacity-100' : ''}`}
                style={{ minWidth: 60 }}
                onClick={() => { handleCopy(email, idx); }}
              >
                {copiedIdx === idx ? 'Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      )}
      {/* 02. Coding Platforms Dropdown */}
      {isCoding && (
        <div
          className={`absolute left-0 top-full mt-2 min-w-[220px] bg-navy/95 rounded-xl shadow-2xl py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ${open ? 'opacity-100 pointer-events-auto' : ''}`}
          style={{ zIndex: 70 }}
        >
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/DIVYANSHUPATEL255/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-2 text-lightest-slate hover:bg-yellow-100/10 hover:text-yellow-400 hover:scale-105 transition rounded-lg text-base whitespace-nowrap font-semibold"
            style={{ transition: 'transform 0.15s' }}
          >
            <SiLeetcode className="text-yellow-400 text-2xl" />
            LeetCode
          </a>
          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/divyanshupatel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-2 text-lightest-slate hover:bg-orange-100/10 hover:text-orange-400 hover:scale-105 transition rounded-lg text-base whitespace-nowrap font-semibold"
            style={{ transition: 'transform 0.15s' }}
          >
            <CodeChefIcon />
            CodeChef
          </a>
          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/divyanshupatel.255"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-2 text-lightest-slate hover:bg-blue-100/10 hover:text-blue-400 hover:scale-105 transition rounded-lg text-base whitespace-nowrap font-semibold"
            style={{ transition: 'transform 0.15s' }}
          >
            <CodeforcesIcon />
            Codeforces
          </a>
        </div>
      )}
      {/* 03. Development Platforms Dropdown */}
      {isDev && (
        <div
          className={`absolute left-0 top-full mt-2 min-w-[220px] bg-navy/95 rounded-xl shadow-2xl py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ${open ? 'opacity-100 pointer-events-auto' : ''}`}
          style={{ zIndex: 70 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/divyanshu255"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-2 text-lightest-slate hover:bg-green-100/10 hover:text-green hover:scale-105 transition rounded-lg text-base whitespace-nowrap font-semibold"
            style={{ transition: 'transform 0.15s' }}
          >
            <FaGithub className="text-green text-2xl" />
            GitHub
          </a>
          {/* EAS (Expo Application Services) */}
          <a
            href="https://expo.dev/accounts/order66"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-2 text-lightest-slate hover:bg-purple-100/10 hover:text-purple-400 hover:scale-105 transition rounded-lg text-base whitespace-nowrap font-semibold"
            style={{ transition: 'transform 0.15s' }}
          >
            <SiExpo className="text-purple-400 text-2xl" />
            EAS
          </a>
        </div>
      )}
    </div>
  );
}

// ABOUT ME
function AboutMeParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-relaxed tracking-wide">{children}</p>
  );
}
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bold underline text-green bg-green/10 px-1 rounded">{children}</span>
  );
}

// SKILLS
function SkillCategory({ title }: { title: string }) {
  return (
    <div className="font-bold text-2xl pb-2 mb-6 text-center w-full tracking-wide bg-white/10 backdrop-blur-md rounded-lg shadow text-lightest-slate border border-white/20">
      {title}
    </div>
  );
}
function SkillList({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-8">{children}</div>
  );
}
function Skill({ icon, name }: { icon: React.ReactNode, name: React.ReactNode }) {
  return (
    <span className="flex items-center gap-4 font-bold mt-2 text-xl group">
      <span className="transition-transform group-hover:scale-125 duration-200">{icon}</span>
      <span className="group-hover:text-green duration-200">{name}</span>
    </span>
  );
}

// PROJECTS
function ProjectCard({
  imgSrc,
  imgAlt,
  title,
  description,
  tech,
  github,
  link,
  reverse,
  accent,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
  reverse: boolean;
  accent: string;
}) {
  return (
    <div className={`flex  md:flex-row${reverse ? '-reverse' : ''} gap-8 items-center ${glassBg} rounded-3xl p-8 shadow-2xl w-full max-w-7xl mt-12 ${cardHover}`}>
      <div className="w-full md:w-1/2 flex-shrink-0">
        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-green/20">
          <Image src={imgSrc} alt={imgAlt} width={320} height={320} className="w-80 h-80 rounded-2xl shadow-md object-cover bg-navy transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
      <div className={`w-full md:w-1/2 flex flex-col gap-4 ${reverse ? "md:items-start text-left" : "md:items-end text-right"}`}>
        <span className="text-green font-mono text-lg md:text-base">{reverse ? "" : ""}Featured Project</span>
        <h3 className={`text-3xl font-bold ${accent}`}>{title}</h3>
        <div className="bg-navy/60 p-4 rounded text-slate text-lg md:text-base max-w-lg shadow border border-lightest-navy/30">{description}</div>
        <div className={`flex flex-wrap gap-4 ${reverse ? "justify-start" : "justify-end"} text-slate text-base font-mono`}>
          {tech.map((t) => (<span key={t} className="bg-navy/30 px-2 py-1 rounded">{t}</span>))}
        </div>
        <div className={`flex gap-4 mt-2 justify-end`}>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green text-2xl"><FaGithub /></a>
          <a href={link} className="text-slate hover:text-green text-2xl"><FaExternalLinkAlt /></a>
        </div>
      </div>
    </div>
  );
}

// SITE VISITS
function SiteVisits() {
  const [visits, setVisits] = React.useState(0);
  React.useEffect(() => {
    const count = parseInt(localStorage.getItem('site_visits') || '0', 10) + 1;
    localStorage.setItem('site_visits', count.toString());
    setVisits(count);
  }, []);
  return (
    <div className="w-full flex justify-center items-center my-16">
      <div className="flex items-center gap-6 bg-light-navy/80 px-10 py-6 rounded-2xl shadow-2xl border-2 border-green animate-fade-in-up">
        <svg className="w-10 h-10 text-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0 0v-4m0 0l-2 2m2-2l2 2" /></svg>
        <span className="text-2xl font-bold text-green">Site Visits:</span>
        <span className="text-5xl font-mono text-lightest-slate bg-navy/80 px-8 py-3 rounded-xl shadow-lg border border-green">
          {visits}
        </span>
      </div>
    </div>
  );
}

// ANIMATED BACKGROUND
function AnimatedBackground() {
  // Decorative gradient blobs/particles for extra beauty, can add more for effect
  return (
    <>
      <div className="fixed top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-green/20 via-blue-500/20 to-purple-800/20 rounded-full blur-3xl opacity-40 animate-pulse -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-gradient-to-tr from-purple-500/30 via-blue-400/30 to-green/30 rounded-full blur-2xl opacity-50 animate-pulse-slow -z-10" />
      <div className="fixed top-1/2 left-[-80px] w-[200px] h-[200px] bg-gradient-to-br from-green/30 via-blue-400/10 to-purple-500/30 rounded-full blur-2xl opacity-30 animate-bounce-slow -z-10" />
    </>
  );
}

/* Add this to your global CSS (e.g. styles/globals.css) for the text-outline effect:
.text-outline {
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
}
*/