export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            GTUStudent<span className="text-gray-400">Hub</span>
          </h1>
          <p className="text-xs text-gray-500">Notes • PYQs • Premium PDFs</p>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#notes"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Notes
          </a>

          <a
            href="#syllabus"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Syllabus
          </a>

          <a
            href="#pyq"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            PYQs
          </a>

          <a
            href="#premium"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Premium
          </a>

          <a
            href="/contact"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#premium"
          className="rounded-2xl border border-gray-700 bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm transition hover:scale-[1.02]"
        >
          Unlock PDF – ₹33
        </a>
      </div>
    </nav>
  );
}
