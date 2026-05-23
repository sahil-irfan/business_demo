import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white transition-transform group-hover:rotate-12">
            B
          </div>
          <span>
            Business<span className="text-indigo-600">Hub</span>
          </span>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600"
          >
            Log in
          </Link>

          <Link
            href="/auth/signup"
            className="relative inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-slate-800 hover:shadow-indigo-200 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;