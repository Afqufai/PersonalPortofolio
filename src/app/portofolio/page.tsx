import Image from "next/image";
import Snowfall from "@/components/snowfall";
import { SiInkscape } from "react-icons/si";

const artworks = [
  {
    title: "Adware Poster",
    description: "An educational poster regarding the dangers of Adwares using the infamous 'blue screen of death' as inspiration for the visuals.",
    image: "/artportos/adwareposter.png",
  },
  {
    title: "Business Card & Logo",
    description: "A logo and a few supergraphics for a business card.",
    image: "/artportos/businesscardlogo.png",
  },
  {
    title: "Card Back Design",
    description: "A neon trading-card back concept.",
    image: "/artportos/card-back.png",
  },
  {
    title: "Futuristic TCG Back",
    description: "A futuristic trading-card back concept.",
    image: "/artportos/futuristictcgback.png",
  },
  {
    title: "Omnipresent",
    description: "Satire art of how 'they' only see suffering as entertainment and business.",
    image: "/artportos/omnipresent.png",
  },
];

export default function Portofolio() {
  return (
    <div className="relative flex flex-col min-h-screen items-center bg-slate-950 font-sans overflow-hidden pt-16 px-4 sm:px-6 lg:px-8">

      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 bg-linear-to-b from-slate-950 via-slate-900 to-blue-950 pointer-events-none" />

      {/* Procedural Snowfall */}
      <Snowfall />

      <main className="relative z-10 flex w-full max-w-5xl flex-col gap-16 py-10 mb-20">

        <section className="flex flex-col items-center text-center mt-8">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-white to-cyan-200 drop-shadow-[0_0_30px_rgba(56,189,248,0.2)] text-center">
            Portofolio
          </h1>
          <h3 className="text-lg sm:text-lg font-medium mb-2 text-sky-100/80 max-w-3xl leading-relaxed text-center">
            Showcasing the art and design work beyond tech. These pieces represent my interest in visual storytelling, branding, and experimental design.
          </h3>
        </section>

        <section className="flex flex-col items-center w-full mt-4">
          <div className="relative flex items-center justify-center w-full mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex items-center px-8 sm:px-12 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-6 shadow-[0_0_8px_rgba(34,211,238,1)]"></span>
              <h2 className="text-lg sm:text-xl font-bold text-sky-50 tracking-wider">
                Exhibition
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-24 sm:gap-32 w-full">
            {artworks.map((artwork, index) => (
              <article
                key={artwork.title}
                className={`group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 w-full`}
              >
                {/* Artwork Frame */}
                <div className="relative w-full md:w-3/5 h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.5)] group-hover:border-sky-300/30 group-hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)] transition-all duration-700 p-4">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-slate-900/50">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain transition-transform duration-1000 group-hover:scale-[1.02] p-2"
                    />
                  </div>
                </div>

                {/* Museum Plaque (Glassmorphism) */}
                <div className="flex flex-col w-full md:w-2/5 p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2">
                  <div className="flex flex-col border-b border-white/10 pb-6 mb-6">
                    <span className="text-xs font-bold text-sky-200/60 tracking-widest uppercase mb-2">Title</span>
                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-sky-50 leading-tight group-hover:text-white transition-colors">{artwork.title}</h3>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-xs font-bold text-sky-200/60 tracking-widest uppercase mb-3">Description</span>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-8">
                      {artwork.description}
                    </p>
                    
                    <div className="flex gap-4 items-center mt-auto border-t border-white/10 pt-6">
                      <SiInkscape className="text-3xl text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" title="Inkscape" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Designed with Inkscape</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}