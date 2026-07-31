import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <svg
              viewBox="0 0 508 508"
              fill="currentColor"
              className="w-8 h-8 text-slate-200 group-hover:text-[#54C5F8] transition-colors"
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
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-[#54C5F8] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-slate-300 hover:text-[#54C5F8] transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="/portofolio"
              className="text-slate-300 hover:text-[#54C5F8] transition-colors font-medium"
            >
              Portfolio
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-slate-300 hover:text-[#54C5F8] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}