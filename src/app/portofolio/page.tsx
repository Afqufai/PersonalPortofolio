import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black pt-16">
      <main className="flex flex-col w-full flex-1 items-center justify-center py-32 bg-white dark:bg-black">

        <div className="w-full h-6 mb-8" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #FBBF24 0px, #FBBF24 10px, #000000 10px, #000000 20px)'
        }}></div>

        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-5xl font-black text-amber-400 text-center">
            UNDER CONSTRUCTION
          </h1>
          <p className="text-lg text-amber-300 text-center">
            Check back later. I haven&apos;t put anything here just yet.
          </p>
          <Link href="/" className="text-center w-[50%] px-6 py-3 border border-amber-600 text-amber-400 hover:border-amber-200 rounded-lg transition-colors">
            Back, for now.
          </Link>
        </div>

        <div className="w-full h-6 mt-8" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #FBBF24 0px, #FBBF24 10px, #000000 10px, #000000 20px)'
        }}></div>

      </main>
    </div>
  );
}