import Link from "next/link";
import Image from "next/image";
import { SiNextdotjs, SiLinux, SiGit } from "react-icons/si";
import { FaCubes, FaGamepad, FaWrench } from "react-icons/fa";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-slate-900 font-sans overflow-hidden pt-16">

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
          <h1 className="text-5xl sm:text-7xl font-black tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-linear-to-b from-white via-slate-300 to-slate-600 drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)] text-center">
            Hi, I'm Afrizal
          </h1>
          <div className="px-6 py-2 border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm shadow-lg">
            <p className="font-bold text-xs sm:text-sm tracking-widest text-slate-400 uppercase">
              Fullstack All The Way
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 w-full max-w-5xl mx-auto mb-20 items-stretch">

          {/* Left Column: Avatar */}
          <div className="relative w-full md:w-2/5 h-[400px] md:h-auto shrink-0 group">
            <div className="relative w-full h-full bg-slate-800 border-2 border-slate-400 overflow-hidden shadow-2xl z-10">
              <Image
                src="/selfportrait.jpeg"
                alt="Self Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 object-top"
              />
            </div>
          </div>

          {/* Right Column: About Me */}
          <div className="flex flex-col w-full md:w-3/5">
            <h2 className="text-xl font-black text-slate-300 tracking-[0.2em] uppercase mb-8 flex items-center gap-4 text-left">
              About Me
              <span className="h-[2px] flex-grow bg-slate-600 inline-block"></span>
            </h2>
            <div className="flex flex-col h-full p-6 sm:p-8 border-l-4 border-slate-500 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-white shadow-lg">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                A fullstack web developer who enjoys making silly, small projects to kill time, such as user-centric simulators.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mb-20">
          <h2 className="text-xl font-black text-slate-300 tracking-[0.2em] uppercase mb-10 text-center flex items-center gap-4 sm:gap-8 w-full justify-center">
            <span className="h-[2px] flex-grow max-w-[200px] bg-slate-600 inline-block"></span>
            Tech Interests
            <span className="h-[2px] flex-grow max-w-[200px] bg-slate-600 inline-block"></span>
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
            <div className="group flex flex-col p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <FaGamepad className="text-4xl text-slate-400 group-hover:text-pink-500 transition-colors" />
                <h3 className="text-lg font-black tracking-wider text-slate-200 uppercase">Game Development</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                I&apos;ve played video games since I was young and gets addicted since. I have always been curious about how games work, designed a few ideas in the past, and hope to make my own dream game. I&apos;ve learnt <b className="text-green-600">RPG Maker MV</b> before for a simple system and executing a few simple concepts.
              </p>
            </div>
            <div className="group flex flex-col p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-[#f97316]/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <FaWrench className="text-4xl text-slate-400 group-hover:text-orange-500 transition-colors" />
                <h3 className="text-lg font-black tracking-wider text-slate-200 uppercase">Hardware & Self-Service</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                I enjoy tinkering with hardware and performing self-service maintenance. From reinstalling operating systems (inul OS) to cleaning out laptop internals, getting my hands dirty with physical tech is something I actively pursue.
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
            <div className="group flex flex-col p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-[#10b981]/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)]">
              <div className="flex items-center gap-4 mb-4">
                <FaCubes className="text-4xl text-slate-400 group-hover:text-[#10b981] transition-colors" />
                <h3 className="text-lg font-black tracking-wider text-slate-200 uppercase">Game Modding</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                It may look like &quot;playing video games&quot; on surface level, but modpack creation also involves a lot of creativity and problem solving skills, forcing community-made mods to work with one another.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mb-20">
          <h2 className="text-xl font-black text-slate-300 tracking-[0.2em] uppercase mb-10 text-center flex items-center gap-4 sm:gap-8 w-full justify-center">
            <span className="h-[2px] flex-grow max-w-[200px] bg-slate-600 inline-block"></span>
            Extra Notes & Contacts
            <span className="h-[2px] flex-grow max-w-[200px] bg-slate-600 inline-block"></span>
          </h2>
          <div className="group flex flex-col p-8 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:border-slate-500 transition-all w-full text-center shadow-lg">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium mb-6">
              Most of the projects are private for personal reasons, some especially used to back up my writing projects in Markdown. If you see me making a commit on a non-coding project, you don't see anything. Just move on.
            </p>
            <div className="h-[1px] w-full bg-slate-700 mb-6"></div>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
              Use <b className="text-white">Email</b> for professional inquiries, and <b className="text-[#5865F2]">Discord</b> for casual talks. Not only does it make zero sense to email me a random cookie recipe, but it also doesn't make sense to use Discord for corporate meetings. I didn't make the rules, okay?
            </p>
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
        </div>
      </main>
    </div>
  );
}