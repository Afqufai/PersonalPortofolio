import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold mb-8 text-black dark:text-zinc-50">
          Welcome to My Personal Portfolio
        </h1>

        <div className="flex flex-col items-center sm:items-start gap-4 mb-12">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">Name:</span> [Your Name Here]
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">Student ID:</span> [Your Student ID Here]
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">Tech Interests:</span> [List your tech interests, e.g., Web Development, Machine Learning, Cloud Computing]
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/portfolio" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Portfolio
          </Link>
          <Link href="/projects" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
