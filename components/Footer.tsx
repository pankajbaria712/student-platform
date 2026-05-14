import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] py-8 pb-safe">
      <div className="mx-auto max-w-6xl px-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4">
          <div className="text-center text-sm text-gray-500 sm:text-left">
            © 2026 GTUStudentHub — Built for students, by students.
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/refund-policy" className="transition hover:text-white">
              Refunds
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
