import Link from "next/link";
import Image from "next/image";
import { SiNextdotjs, SiLinux, SiGit, SiLinuxmint } from "react-icons/si";
import { FaCubes, FaGamepad } from "react-icons/fa";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-slate-900 font-sans overflow-hidden">

      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      <main className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center px-8 py-20">
        <div className="mb-14 text-center flex flex-col items-center">
          <h1 className="text-5xl text-center sm:text-7xl font-black tracking-widest text-white uppercase mb-6 drop-shadow-xl">
            Hi, I&apos;m Afrizal
          </h1>
          <div className="px-6 py-2 border-2 border-slate-500 bg-slate-800/50 backdrop-blur-sm shadow-lg">
            <p className="font-bold text-lg tracking-widest text-slate-300 uppercase">
              &quot;I do stuff, and that&apos;s it.&quot;
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-16 mb-20 w-full max-w-4xl mx-auto">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 group">
            <div className="relative w-full h-full bg-slate-800 border-2 border-slate-400 overflow-hidden shadow-2xl z-10">
              <Image 
                src="/selfportrait.jpeg" 
                alt="Self Portrait" 
                fill
                sizes="(max-width: 768px) 192px, 224px"
                priority
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 object-top"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-sm shadow-2xl w-full sm:w-72">
              <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-2">Name</span>
              <span className="text-xl font-black text-slate-900 text-center uppercase leading-tight">
                Afrizal Qurratul F.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-sm shadow-2xl w-full sm:w-72">
              <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-2">Student ID</span>
              <span className="text-3xl font-black text-slate-900 text-center">
                2341720083
              </span>
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center w-full mb-20">
          <h2 className="text-xl font-black text-slate-300 tracking-[0.2em] uppercase mb-2 text-center flex items-center gap-4">
            <span className="h-[2px] w-52 bg-slate-600 inline-block"></span>
            Tech Interests
            <span className="h-[2px] w-52 bg-slate-600 inline-block"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="group flex flex-col p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-slate-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <SiNextdotjs className="text-4xl text-slate-400 group-hover:text-white transition-colors" />
                <h3 className="text-lg font-black tracking-wider text-slate-200 uppercase">Next.js & Web Dev</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                With web development being my main focus, I stumbled upon <b className="text-gray-300">Next.js</b> as a fullstack framework, learning <b className="text-cyan-600">TypeScript</b>, <b className="text-yellow-500">JavaScript</b>, and <b className="text-cyan-500">React</b> along the way with additional frameworks and libraries.
              </p>
            </div>
            <div className="group flex flex-col p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-[#FCCA3F]/50 hover:shadow-[0_0_20px_rgba(252,202,63,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <SiLinux className="text-4xl text-slate-400 group-hover:text-[#FCCA3F] transition-colors" />
                <h3 className="text-lg font-black tracking-wider text-slate-200 uppercase">Linux Environment</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                I&apos;ve been using Linux for the past few months in total. Starting with <b className="text-lime-600">Mint</b> out of curiosity, then switched to <b className="text-cyan-600">Fedora & Arch </b> and now, I&apos;m sticking with <b className="text-teal-600">CachyOS </b> as a daily driver. I am currently comfortable with it, aiming for the best desktop optimization and experience, which also teaches me to troubleshoot issues and how to solve incompatibilities.
              </p>
            </div>
            <div className="group flex flex-col p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-[#ec4899]/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <FaGamepad className="text-4xl text-slate-400 group-hover:text-pink-500 transition-colors" />
                <h3 className="text-lg font-black tracking-wider text-slate-200 uppercase">Game Development</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                I&apos;ve played video games since I was young and gets addicted since. I have always been curious about how games work, designed a few ideas in the past, and hope to make my own dream game. I&apos;ve learnt <b className="text-green-600">RPG Maker MV</b> before for a simple system and executing a few simple concepts.
              </p>
            </div>
            <div className="group flex flex-col p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-[#F05032]/50 hover:shadow-[0_0_20px_rgba(240,80,50,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <SiGit className="text-4xl text-slate-400 group-hover:text-[#F05032] transition-colors" />
                <h3 className="text-lg font-black tracking-wider text-slate-200 uppercase">Git & Version Control</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                I always believe that <b className="text-orange-400">Git</b> and <b className="text-orange-400">version control</b> is a staple in most, if not, all IT and real-world projects. Not only good for collaboration and tracking changes, but also a method of backup, especially if combined with <b className="text-gray-400">GitHub</b>.
              </p>
            </div>

            <div className="group md:col-span-2 flex flex-col p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-[#10b981]/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <FaCubes className="text-4xl text-slate-400 group-hover:text-[#10b981] transition-colors" />
                <h3 className="text-lg font-black tracking-wider text-slate-200 uppercase">Game Modding & Modpack Creation</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                It may look like &quot;playing video games&quot; on surface level, but modpack creation also involves a lot of creativity and problem solving skills, forcing community-made mods to work with one another, despite the incompatibilities. Modpack creation also gives a good insight on game design, especially if aiming for a certain experience I am passionate about. Configuring mods usually involves a lot of trial and error. Some mods even use something like <b className="text-yellow-500">JavaScript</b> or <b className="text-blue-500">Lua</b>, as its scripting language.
              </p>
            </div>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link
            href="/projects"
            className="px-8 py-4 bg-transparent text-white text-center border-2 border-white font-black tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/portofolio"
            className="px-8 py-4 bg-transparent text-white text-center border-2 border-white font-black tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            View Portofolio
          </Link>
          <Link
            href="/interest"
            className="px-8 py-4 bg-transparent text-white text-center border-2 border-white font-black tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            Want to know deeper?
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}