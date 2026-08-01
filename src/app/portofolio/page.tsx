import Image from "next/image";
import Link from "next/link";

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
    <div className="relative flex flex-col min-h-screen items-center bg-slate-900 font-sans overflow-hidden pt-16 px-4 sm:px-6 lg:px-8">
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
      <main className="relative z-10 flex w-full max-w-5xl flex-col gap-16 py-10 mb-20">

        <section className="flex flex-col items-center text-center mt-8">
          <h1 className="text-6xl sm:text-8xl font-black tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-linear-to-b from-white via-slate-300 to-slate-600 drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)] text-center">
            Portofolio
          </h1>
          <h3 className="text-xl sm:text-2xl font-black mb-10 uppercase text-transparent text-center bg-clip-text bg-linear-to-b from-slate-300 via-slate-400 to-slate-700 max-w-4xl leading-relaxed">
            Showcasing the art and design work beyond tech. These pieces represent my interest in visual storytelling, branding, and experimental design.
          </h3>
        </section>

        <section className="flex flex-col items-center w-full mt-10">
          <h2 className="text-xl font-black text-slate-300 tracking-[0.2em] uppercase mb-16 text-center flex items-center gap-4 sm:gap-8 w-full justify-center">
            <span className="h-[2px] flex-grow max-w-[200px] bg-slate-600 inline-block"></span>
            Exhibition
            <span className="h-[2px] flex-grow max-w-[200px] bg-slate-600 inline-block"></span>
          </h2>
          <div className="flex flex-col gap-32 w-full">
            {artworks.map((artwork, index) => (
              <article
                key={artwork.title}
                className={`group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 w-full`}
              >
                {/* Artwork Frame */}
                <div className="relative w-full md:w-3/5 h-[400px] sm:h-[500px] md:h-[600px] bg-slate-800 border-4 border-slate-600 overflow-hidden shadow-2xl z-10 group-hover:border-white transition-colors p-4">
                  <div className="relative w-full h-full bg-slate-900 border-2 border-slate-700">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain transition-all duration-700 p-2"
                    />
                  </div>
                </div>

                {/* Museum Plaque (Brutalist) */}
                <div className="flex flex-col w-full md:w-2/5 p-6 sm:p-8 bg-slate-100 border-4 border-slate-400 shadow-[8px_8px_0px_rgba(255,255,255,0.1)] group-hover:shadow-[8px_8px_0px_rgba(255,255,255,0.4)] transition-all duration-500">
                  <div className="flex flex-col border-b-4 border-slate-300 pb-4 mb-4">
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">Title</span>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-widest text-slate-900 uppercase leading-tight">{artwork.title}</h3>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-2">Description</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-bold uppercase tracking-wide">
                      {artwork.description}
                    </p>
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