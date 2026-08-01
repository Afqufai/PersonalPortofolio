import Link from "next/link";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiSupabase,
  SiCplusplus,
  SiArduino,
  SiDocker,
  SiJavascript,
  SiVercel
} from "react-icons/si";
import { FaGithub, FaExternalLinkAlt, FaGamepad, FaCube, FaCubes } from "react-icons/fa";
import { GiAnvil } from "react-icons/gi";
import Image from "next/image";
import Snowfall from "@/components/snowfall";

export default function Projects() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-slate-950 font-sans overflow-hidden pt-16">

      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-slate-950 via-slate-900 to-blue-950 pointer-events-none" />

      {/* Procedural Snowfall */}
      <Snowfall />

      <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-4 sm:px-8 py-20">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-white to-cyan-200 drop-shadow-[0_0_30px_rgba(56,189,248,0.2)] text-center">
          Projects
        </h1>
        <h3 className="text-xl sm:text-2xl font-medium mb-12 text-sky-100/80 text-center max-w-2xl leading-relaxed">
          An archive of my projects I've worked on.
        </h3>

        <div className="w-full mb-20">
          <div className="relative flex items-center justify-center w-full mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex items-center px-6 sm:px-10 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="z-20 cursor-default" title="Secret Portal (Coming Soon)">
                <span className="block w-2 h-2 rounded-full bg-sky-400 animate-pulse mr-6 shadow-[0_0_8px_rgba(56,189,248,1)]"></span>
              </Link>
              <h2 className="text-lg sm:text-xl font-bold text-sky-50 tracking-wider">
                Featured Projects
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">

            {/* Project Card */}
            <div className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-sky-300/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 w-full">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden group-hover:border-sky-300/50 transition-colors relative">
                <Image src="/projectlogos/SapaWargaLogo.webp" alt="SapaWarga Mobile App" fill className="object-cover p-2" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-sky-50 tracking-wide group-hover:text-white transition-colors">
                    SapaWarga Mobile App
                  </h3>
                  <div className="flex gap-4">
                    <Link href="https://github.com/MiracleCakra/PBL_Jawara_Mobile" className="text-slate-400 hover:text-sky-300 transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                      <FaGithub className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  A port of the "Jawara" web application into the mobile environment, focusing around civilian management. Developed with Flutter, Dart, and utilizing Supabase as the backend, featuring a machine learning component for a marketplace feature.
                </p>
                <div className="flex gap-4 items-center mt-auto border-t border-white/10 pt-4">
                  <SiFlutter className="text-2xl text-slate-400 hover:text-[#1c8fed] hover:drop-shadow-[0_0_8px_rgba(28,143,237,0.8)] transition-all" title="Flutter" />
                  <SiSupabase className="text-2xl text-slate-400 hover:text-[#3ECF8E] hover:drop-shadow-[0_0_8px_rgba(62,207,142,0.8)] transition-all" title="Supabase" />
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 w-full">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:border-emerald-400/50 transition-colors">
                <SiArduino className="text-5xl text-slate-400 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] transition-all" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-sky-50 tracking-wide group-hover:text-white transition-colors">
                    RFID Gate IoT Ecosystem
                  </h3>
                  <div className="flex gap-4">
                    <Link href="https://github.com/sirfara12/SISTEM-MONITORING-PALANG-TOL-" className="text-slate-400 hover:text-emerald-400 transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                      <FaGithub className="text-xl" />
                    </Link>
                    <Link href="https://sistem-monitoring-palang-tol.vercel.app/" className="text-slate-400 hover:text-emerald-400 transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                      <FaExternalLinkAlt className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  A full-stack ecosystem managing real-time toll gate telemetry. The project demanded severe hardware troubleshooting when an integrated ESP32 and RFID sensor suffered from power fluctuations. The backend was containerized via Docker and deployed via multi-stage GitHub Actions CI/CD pipelines.
                </p>
                <div className="flex gap-4 items-center mt-auto border-t border-white/10 pt-4">
                  <SiNextdotjs className="text-2xl text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" title="Next.js" />
                  <SiTailwindcss className="text-2xl text-slate-400 hover:text-[#06B6D4] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all" title="Tailwind CSS" />
                  <SiCplusplus className="text-2xl text-slate-400 hover:text-[#00599C] hover:drop-shadow-[0_0_8px_rgba(0,89,156,0.8)] transition-all" title="C++" />
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-blue-400/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 w-full">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:border-blue-400/50 transition-colors">
                <SiVercel className="text-5xl text-slate-400 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-sky-50 tracking-wide group-hover:text-white transition-colors">
                    TapToll Landing Page
                  </h3>
                  <div className="flex gap-4">
                    <Link href="https://smarttolllandingpage.vercel.app/" className="text-slate-400 hover:text-blue-400 transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                      <FaExternalLinkAlt className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  A modern, responsive landing page for the TapToll (Smart Toll) ecosystem. Designed with a sleek user interface to provide clear information to prospective users and showcase the integration of IoT with web technologies.
                </p>
                <div className="flex gap-4 items-center mt-auto border-t border-white/10 pt-4">
                  <SiNextdotjs className="text-2xl text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" title="Next.js" />
                  <SiTailwindcss className="text-2xl text-slate-400 hover:text-[#06B6D4] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all" title="Tailwind CSS" />
                  <SiVercel className="text-2xl text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" title="Vercel" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full mb-10">
          <div className="relative flex items-center justify-center w-full mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex items-center px-6 sm:px-10 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse mr-6 shadow-[0_0_8px_rgba(244,114,182,1)]"></span>
              <h2 className="text-lg sm:text-xl font-bold text-sky-50 tracking-wider">
                Creative & Game Design
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">

            {/* Project Card */}
            <div className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-sky-300/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 w-full">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:border-sky-300/50 transition-colors">
                <svg
                  viewBox="0 0 508 508"
                  fill="currentColor"
                  className="w-16 h-16 sm:w-20 sm:h-20 text-slate-400 group-hover:text-sky-300 group-hover:drop-shadow-[0_0_15px_rgba(125,211,252,0.8)] transition-all p-2"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    strokeWidth="2.051"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    paintOrder="stroke markers fill"
                    d="M 254,0 188.11566,136.9283 254,214.62374 319.88435,136.9283 Z M 254,57.149532 292.04329,136.215 254,181.07789 215.95672,136.215 Z"
                  />
                  <path
                    fill="currentColor"
                    strokeWidth="2.051"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    paintOrder="stroke markers fill"
                    d="m 472.42279,61.560321 -125.52167,85.641219 18.2098,100.2284 95.90524,-34.34406 z m -28.57478,49.492959 -6.58626,87.49434 -55.37792,19.83076 -10.51499,-57.87405 z"
                  />
                  <path
                    fill="currentColor"
                    strokeWidth="2.051"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    paintOrder="stroke markers fill"
                    d="m 35.577215,61.560321 125.521665,85.641219 -18.2098,100.2284 -95.905232,-34.34406 z m 28.574768,49.492959 6.586276,87.49434 55.377901,19.83076 10.51501,-57.87405 z"
                  />
                  <path
                    fill="currentColor"
                    strokeWidth="2.051"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    paintOrder="stroke markers fill"
                    d="m 253.93526,224.62388 a 183.8534,183.8534 0 0 0 -183.788552,183.89681 183.8534,183.8534 0 0 0 25.80671,93.16392 161.00753,161.00753 0 0 1 -2.960937,-28.95917 161.00753,161.00753 0 0 1 160.950939,-161.04506 161.00753,161.00753 0 0 1 147.482,96.72824 l 36.42788,-0.0174 A 183.8534,183.8534 0 0 0 253.93526,224.62388 Z m 147.51573,183.85384 a 161.00753,161.00753 0 0 1 13.55653,64.13455 L 254,472.68787 h 161.00752 a 161.00753,161.00753 0 0 1 -2.96421,29.0065 183.8534,183.8534 0 0 0 25.80999,-93.21668 z"
                  />
                  <path
                    fill="currentColor"
                    strokeWidth="1.80886"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    paintOrder="stroke markers fill"
                    d="m 336.34377,425.70438 a 82.343773,80.594521 0 0 1 -82.33409,80.59452 82.343773,80.594521 0 0 1 -82.35345,-80.57558 82.343773,80.594521 0 0 1 82.31474,-80.61346 82.343773,80.594521 0 0 1 82.37279,80.55664 L 254,425.70438 Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-sky-50 tracking-wide group-hover:text-white transition-colors">
                    Valley of the Frozen Flowers
                  </h3>
                  <div className="flex gap-4">
                    <Link href="https://github.com/Afqufai/PersonalPortofolio" className="text-slate-400 hover:text-sky-300 transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                      <FaGithub className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  This very website. Built with Tailwind and Next.js, and containerized with Docker. A modern, responsive portfolio demonstrating UI/UX principles, smooth animations, and interactive design methodologies.
                </p>
                <div className="flex gap-4 items-center mt-auto border-t border-white/10 pt-4">
                  <SiNextdotjs className="text-2xl text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" title="Next.js" />
                  <SiTailwindcss className="text-2xl text-slate-400 hover:text-[#06B6D4] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all" title="Tailwind CSS" />
                  <SiDocker className="text-2xl text-slate-400 hover:text-[#2496ED] hover:drop-shadow-[0_0_8px_rgba(36,150,237,0.8)] transition-all" title="Docker" />
                </div>
              </div>
            </div>


            {/* Project Card */}
            <div className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-green-400/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 w-full">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:border-green-400/50 transition-colors">
                <FaCubes className="text-5xl text-slate-400 group-hover:text-green-400 group-hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.8)] transition-all" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-sky-50 tracking-wide group-hover:text-white transition-colors">
                    Phobonima Modpack
                  </h3>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  A <span className="text-green-300 font-medium">Minecraft</span> modpack focused on the theme of a <span className="font-medium text-slate-200">Hardcore Survival Shooter</span>, heavily inspired by modern looter-shooters. This project involved deep game design balancing, scripting custom mechanics with KubeJS, and community-driven iterations.
                </p>
                <div className="flex gap-4 items-center mt-auto border-t border-white/10 pt-4">
                  <FaGamepad className="text-2xl text-slate-400 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all" title="Game Designing" />
                  <SiJavascript className="text-2xl text-slate-400 hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] transition-all" title="KubeJS" />
                  <GiAnvil className="text-2xl text-slate-400 hover:text-[#db9213] hover:drop-shadow-[0_0_8px_rgba(219,146,19,0.8)] transition-all" title="Forge" />
                  <FaCube className="text-2xl text-slate-400 hover:text-green-500 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all" title="Minecraft 1.20.1" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}