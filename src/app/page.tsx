import Link from "next/link";
import Image from "next/image";
import { SiNextdotjs, SiLinux, SiGit, SiTypescript, SiReact, SiTailwindcss } from "react-icons/si";
import { FaCubes, FaGamepad, FaWrench, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Snowfall from "@/components/snowfall";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-slate-950 font-sans overflow-hidden pt-16">

      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-slate-950 via-slate-900 to-blue-950 pointer-events-none" />

      {/* Procedural Snowfall */}
      <Snowfall />

      <main className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center px-8 py-20">
        <div className="mb-14 text-center flex flex-col items-center gap-4">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-white to-cyan-200 drop-shadow-[0_0_30px_rgba(56,189,248,0.2)] text-center">
            Hi, I'm Afrizal
          </h1>
          <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
            <p className="font-medium text-sm sm:text-base tracking-wide text-sky-100">
              Fullstack All The Way
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 w-full max-w-5xl mx-auto mb-20 items-stretch">

          {/* Left Column: Avatar */}
          <div className="relative w-full md:w-2/5 h-[400px] md:h-auto shrink-0 group">
            <div className="relative w-full h-full bg-slate-800/50 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-sm z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/selfportrait.jpeg"
                alt="Self Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 object-top mix-blend-luminosity group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: About Me */}
          <div className="flex flex-col w-full md:w-3/5">
            <h2 className="text-2xl font-bold text-sky-100 tracking-wider mb-6 flex items-center gap-4 text-left">
              About Me
            </h2>
            <div className="flex flex-col h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-8">
                A fullstack web developer passionate about building efficient, user-centric web applications and exploring digital ecosystems. Beyond coding, I have a strong interest in creative design and world-building, which brings a unique perspective to my problem-solving.
              </p>

              <div className="mt-auto">
                <h3 className="text-xs font-bold text-sky-200/80 tracking-widest uppercase mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all group cursor-default">
                    <SiReact className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-xs font-medium text-slate-200">React</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all group cursor-default">
                    <SiNextdotjs className="text-slate-300 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium text-slate-200">Next.js</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all group cursor-default">
                    <SiTypescript className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                    <span className="text-xs font-medium text-slate-200">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/50 hover:shadow-[0_0_10px_rgba(56,189,248,0.2)] transition-all group cursor-default">
                    <SiTailwindcss className="text-slate-300 group-hover:text-sky-400 transition-colors" />
                    <span className="text-xs font-medium text-slate-200">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/50 hover:shadow-[0_0_10px_rgba(251,191,36,0.2)] transition-all group cursor-default">
                    <SiLinux className="text-slate-300 group-hover:text-amber-400 transition-colors" />
                    <span className="text-xs font-medium text-slate-200">Linux</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-400/50 hover:shadow-[0_0_10px_rgba(248,113,113,0.2)] transition-all group cursor-default">
                    <SiGit className="text-slate-300 group-hover:text-red-400 transition-colors" />
                    <span className="text-xs font-medium text-slate-200">Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mb-20">
          <h2 className="text-2xl font-bold text-sky-100 tracking-wider mb-10 text-center flex items-center gap-4">
            Tech Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            {/* Tech Card */}
            <div className="group flex flex-col p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-sky-300/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <SiNextdotjs className="text-4xl text-slate-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all" />
                <h3 className="text-lg font-bold tracking-wide text-sky-50">Next.js & Web Dev</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                With web development being my main focus, I stumbled upon <span className="text-sky-200 font-medium">Next.js</span> as a fullstack framework, learning TypeScript, JavaScript, and React along the way with additional frameworks and libraries.
              </p>
            </div>

            {/* Tech Card */}
            <div className="group flex flex-col p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-amber-300/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <SiLinux className="text-4xl text-slate-300 group-hover:text-amber-300 group-hover:drop-shadow-[0_0_10px_rgba(252,211,77,0.6)] transition-all" />
                <h3 className="text-lg font-bold tracking-wide text-sky-50">Linux Environment</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                I've been using Linux for the past few months in total. Starting with Mint out of curiosity, then switched to Fedora & Arch, and now sticking with <span className="text-teal-200 font-medium">CachyOS</span> as a daily driver for the best desktop optimization.
              </p>
            </div>

            {/* Tech Card */}
            <div className="group flex flex-col p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-pink-400/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <FaGamepad className="text-4xl text-slate-300 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_10px_rgba(244,114,182,0.6)] transition-all" />
                <h3 className="text-lg font-bold tracking-wide text-sky-50">Game Development</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                I've played video games since I was young. I have always been curious about how games work, designed a few ideas in the past, and hope to make my own dream game.
              </p>
            </div>

            {/* Tech Card */}
            <div className="group flex flex-col p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <FaWrench className="text-4xl text-slate-300 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.6)] transition-all" />
                <h3 className="text-lg font-bold tracking-wide text-sky-50">Hardware & Self-Service</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                I enjoy tinkering with hardware and performing self-service maintenance. From reinstalling operating systems (inul OS) to cleaning out laptop internals, getting my hands dirty is something I pursue.
              </p>
            </div>

            {/* Tech Card */}
            <div className="group flex flex-col p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-red-400/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <SiGit className="text-4xl text-slate-300 group-hover:text-red-400 group-hover:drop-shadow-[0_0_10px_rgba(248,113,113,0.6)] transition-all" />
                <h3 className="text-lg font-bold tracking-wide text-sky-50">Git & Version Control</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                I believe that Git and version control is a staple in most IT and real-world projects. Not only good for collaboration and tracking changes, but also a reliable method of backup.
              </p>
            </div>

            {/* Tech Card */}
            <div className="group flex flex-col p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <FaCubes className="text-4xl text-slate-300 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.6)] transition-all" />
                <h3 className="text-lg font-bold tracking-wide text-sky-50">Game Modding</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Modpack creation involves a lot of creativity and problem solving skills, forcing community-made mods to work with one another. It gives a good insight into game design.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mb-20">
          <h2 className="text-2xl font-bold text-sky-100 tracking-wider mb-8 text-center flex items-center gap-4">
            Connect With Me
          </h2>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <Link href="https://www.linkedin.com/in/afrizal-qurratul-faizin/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-8 py-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#0A66C2]/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <FaLinkedin className="text-3xl text-slate-300 group-hover:text-[#0A66C2] group-hover:drop-shadow-[0_0_10px_rgba(10,102,194,0.6)] transition-all" />
              <span className="font-bold text-slate-200 group-hover:text-white transition-colors tracking-wide">LinkedIn</span>
            </Link>

            <Link href="https://github.com/afqufai" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-8 py-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-slate-400/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <FaGithub className="text-3xl text-slate-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all" />
              <span className="font-bold text-slate-200 group-hover:text-white transition-colors tracking-wide">GitHub</span>
            </Link>

            <Link href="mailto:afrizalquratulfaizih@gmail.com" className="group flex items-center gap-4 px-8 py-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <FaEnvelope className="text-3xl text-slate-300 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.6)] transition-all" />
              <span className="font-bold text-slate-200 group-hover:text-white transition-colors tracking-wide">Email</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full bg-white/10 text-white text-center border border-white/20 font-bold tracking-wide hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          >
            View Projects
          </Link>
          <Link
            href="/portofolio"
            className="px-8 py-3 rounded-full bg-white/10 text-white text-center border border-white/20 font-bold tracking-wide hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          >
            View Portofolio
          </Link>
        </div>
      </main>
    </div>
  );
}