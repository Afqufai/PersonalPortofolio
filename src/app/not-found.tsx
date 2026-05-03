import Link from "next/link";
import styles from "@/app/styles/404.module.css";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center font-mono bg-black overflow-x-hidden">
      <main className="flex flex-col w-full flex-1 items-center justify-center py-16 sm:py-32 px-6 sm:px-8 bg-black">
        <div className={`w-full h-4 sm:h-6 mb-8 sm:mb-12 ${styles.alertTape}`}></div>
        <div className="flex flex-col gap-6 sm:gap-8 items-center w-full sm:w-xl md:w-2xl lg:w-3xl">
          <h1 className={`text-3xl sm:text-4xl md:text-6xl font-black text-center tracking-widest sm:tracking-widest ${styles.alertText}`}>
            --// 404 //--
          </h1>
          <p className={`text-sm sm:text-xl md:text-2xl font-bold tracking-widest sm:tracking-[0.2em] text-center uppercase leading-loose sm:leading-relaxed ${styles.alertText}`}>
            You were not supposed to be here.
            This page does not exist anyways.
          </p>
          <Link 
            href="/" 
            className={`mt-2 sm:mt-4 text-center text-xs sm:text-base w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 border-2 rounded-sm transition-all uppercase tracking-[0.15em] sm:tracking-widest font-black ${styles.alertBtn}`}
          >
            Back to Homepage
          </Link>
        </div>
        <div className={`w-full h-4 sm:h-6 mt-8 sm:mt-12 ${styles.alertTape}`}></div>
      </main>
    </div>
  );
}