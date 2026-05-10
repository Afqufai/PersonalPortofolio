import Link from "next/link";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiSupabase,
  SiCplusplus,
  SiArduino,
  SiDocker,
  SiJavascript
} from "react-icons/si";
import { FaGithub, FaExternalLinkAlt, FaBook, FaCross, FaCubes, FaCube} from "react-icons/fa";
import Image from "next/image";
import Footer from "@/components/footer";
import { FaX } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { BiBlock } from "react-icons/bi";
import { GiAnvil } from "react-icons/gi";

export default function Projects() {
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

      <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-4 sm:px-8 py-20">
        <h1 className="text-6xl sm:text-8xl font-black tracking-widest uppercase mb-2 text-transparent bg-clip-text bg-linear-to-b from-white via-slate-300 to-slate-600 drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]">
          Projects
        </h1>
        <h3 className="text-2xl font-black mb-8 uppercase text-transparent text-center bg-clip-text bg-linear-to-b from-slate-300 via-slate-400 to-slate-700">
          An archive of my projects I&apos;ve worked on.
        </h3>

        <div className="w-full mb-20">
          <div className="relative flex items-center justify-center w-full mb-14">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex items-center px-6 sm:px-10 py-3 bg-slate-900 border border-slate-600 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-8 shadow-[0_0_8px_rgba(59,130,246,1)]"></span>
              <h2 className="text-xl sm:text-2xl font-mono font-black text-slate-200 tracking-[0.25em] uppercase">
                Projects
              </h2>
              <span className="hidden sm:block text-xs font-mono text-slate-500 ml-6 border-l border-slate-700 pl-6">
                /important
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div className="group flex flex-col sm:flex-row gap-6 p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-[#54C5F8]/50 hover:shadow-[0_0_25px_rgba(84,197,248,0.1)] w-full">
              <div className="w-24 h-24 shrink-0 bg-slate-900 border-2 border-slate-600 flex items-center justify-center group-hover:border-[#54C5F8] transition-colors">
                <Image src="/projectlogos/SapaWargaLogo.webp" alt="SapaWarga Mobile App" width={96} height={96} />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-200 uppercase tracking-wider group-hover:text-white transition-colors">
                    SapaWarga Mobile App
                  </h3>
                  <div className="flex gap-4">
                    <Link href="https://github.com/MiracleCakra/PBL_Jawara_Mobile" className="text-slate-400 hover:text-[#54C5F8] transition-colors">
                      <FaGithub className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  A port of the &quot;Jawara&quot; web application into the mobile environment, focuses around civilian management. The app was developed with Flutter, Dart, and utilising Supabase as the backend and featuring a machine learning component for marketplace feature.
                </p>
                <div className="flex gap-5 items-center mt-auto border-t border-slate-700 pt-4">
                  <SiFlutter className="text-2xl text-slate-500 hover:text-[#1c8fed] transition-colors" title="Flutter" />
                  <SiSupabase className="text-2xl text-slate-500 hover:text-[#3ECF8E] transition-colors" title="Supabase" />
                </div>
              </div>
            </div>

            <div className="group flex flex-col sm:flex-row gap-6 p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-[#54C5F8]/50 hover:shadow-[0_0_25px_rgba(84,197,248,0.1)] w-full">
              <div className="w-24 h-24 shrink-0 bg-slate-900 border-2 border-slate-600 flex items-center justify-center group-hover:border-[#54C5F8] transition-colors">
                {/* Apparently you have to ACTUALLY DRAW all this MANUALLY???? */}
                <svg
                  viewBox="0 0 508 508"
                  fill="currentColor"
                  className="w-20 h-20 text-slate-200 group-hover:text-[#54C5F8] transition-colors p-2"
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-200 uppercase tracking-wider group-hover:text-white transition-colors">
                    Valley of the Frozen Flowers
                  </h3>
                  <div className="flex gap-4">
                    <Link href="https://github.com/Afqufai/PersonalPortofolio" className="text-slate-400 hover:text-[#54C5F8] transition-colors">
                      <FaGithub className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  This very website. Built with Tailwind and Next.js, contained with Docker. Initially created for an assignment, but ended up using this as a personal portofolio portal for all my projects... with unserious and personal projects included.
                </p>
                <div className="flex gap-5 items-center mt-auto border-t border-slate-700 pt-4">
                  <SiNextdotjs className="text-2xl text-slate-500 hover:text-white transition-colors" title="Next.js" />
                  <SiTailwindcss className="text-2xl text-slate-500 hover:text-[#06B6D4] transition-colors" title="Tailwind CSS" />
                  <SiDocker className="text-2xl text-slate-500 hover:text-[#2496ED] transition-colors" title="Docker" />
                </div>
              </div>
            </div>

            <div className="group flex flex-col sm:flex-row gap-6 p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] w-full">
              <div className="w-24 h-24 shrink-0 bg-slate-900 border-2 border-slate-600 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                <SiArduino className="text-4xl text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-200 uppercase tracking-wider group-hover:text-white transition-colors">
                    RFID Gate IoT Ecosystem
                  </h3>
                  <div className="flex gap-4">
                    <Link href="https://github.com/sirfara12/SISTEM-MONITORING-PALANG-TOL-" className="text-slate-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </Link>
                    <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                      <FaExternalLinkAlt className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  A full-stack ecosystem managing real-time toll gate telemetry. The project demanded severe hardware troubleshooting when an integrated ESP32 and RFID sensor suffered from power fluctuations and connection drops due to unsoldered, loose physical components. The backend was containerized via Docker and deployed via multi-stage GitHub Actions CI/CD pipelines.
                </p>
                <div className="flex gap-5 items-center mt-auto border-t border-slate-700 pt-4">
                  <SiNextdotjs className="text-2xl text-slate-500 hover:text-white transition-colors" title="Next.js" />
                  <SiTailwindcss className="text-2xl text-slate-500 hover:text-[#06B6D4] transition-colors" title="Tailwind CSS" />
                  <SiCplusplus className="text-2xl text-slate-500 hover:text-[#00599C] transition-colors" title="C++" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full mb-10">
          <div className="relative flex items-center justify-center w-full mb-14">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex items-center px-6 sm:px-10 py-3 bg-slate-900 border border-slate-600 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse mr-8 shadow-[0_0_8px_rgba(246,130,56,1)]"></span>
              <h2 className="text-xl sm:text-2xl font-mono font-black text-slate-200 tracking-[0.25em] uppercase">
                Personal Projects
              </h2>
              <span className="hidden sm:block text-xs font-mono text-slate-500 ml-6 border-l border-slate-700 pl-6">
                /DO-NOT
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div className="group flex flex-col sm:flex-row gap-6 p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.1)] w-full">
              <div className="w-24 h-24 shrink-0 bg-slate-900 border-2 border-slate-600 flex items-center justify-center group-hover:border-green-500 transition-colors">
                <FaCubes className="text-4xl text-slate-500 group-hover:text-green-400 transition-colors" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-200 uppercase tracking-wider group-hover:text-white transition-colors">
                    Phobonima Modpack
                  </h3>
                  <div className="flex gap-4">
                    <Link href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                      <ImCross className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  A <b className="text-green-500"> Minecraft </b> modpack that focuses around the theme of <b>Extraction Shooter</b> mainly inspired by the core gameplay loop of the Roblox title AniPhobia, this pack was designed as an accessible, community-friendly alternative following controversial administrative decisions within the original game&apos;s community.
                </p>
                <div className="flex gap-5 items-center mt-auto border-t border-slate-700 pt-4">
                  <SiJavascript className="text-2xl text-slate-500 hover:text-purple-400 transition-colors" title="KubeJS" />
                  <GiAnvil className="text-2xl text-slate-500 hover:text-[#db9213] transition-colors" title="Forge" />
                  <FaCube className="text-2xl text-slate-500 hover:text-green-500 transition-colors" title="Minecraft 1.20.1" />
                </div>
              </div>
            </div>

            <div className="group flex flex-col sm:flex-row gap-6 p-6 border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/80 transition-all hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.1)] w-full">
              <div className="w-24 h-24 shrink-0 bg-slate-900 border-2 border-slate-600 flex items-center justify-center group-hover:border-pink-500 transition-colors">
                <FaBook className="text-4xl text-slate-500 group-hover:text-pink-400 transition-colors" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-200 uppercase tracking-wider group-hover:text-white transition-colors">
                    Threat of Termination
                  </h3>
                  <div className="flex gap-4">
                    <Link href="https://komplekthreatoftermination.carrd.co/" className="text-slate-400 hover:text-pink-400 transition-colors">
                      <FaExternalLinkAlt className="text-xl" />
                    </Link>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  An Indonesian <b><span className="text-pink-500">BanG Dream! x Komplek x </span><span className="text-cyan-600">The Terminator</span></b> fanfic wrote in 2020 a long way before I got into IT. A lot of stupid crossovers, bad jokes, inside jokes, and a whole rollercoaster of a plot featuring mostly friends, BanG Dream Characters, and lots, and lots of TERMINATORs. Also, the portal website lied about the releasing another chapter. <b className="text-rose-400">It&apos;s cancelled, sorry.</b>
                </p>
                <div className="flex gap-5 items-center mt-auto border-t border-slate-700 pt-4">
                  <span className="text-sm font-medium text-slate-500 hover:text-white transition-colors">Plaintext</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}