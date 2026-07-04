import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur z-50">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-white">
          Victor Sumbo
        </Link>

        <div className="flex gap-5 text-sm text-gray-300">
          <Link href="/technology" className="hover:text-white">
            Technology
          </Link>
          <Link href="/focus" className="hover:text-white">
            Focus
          </Link>
          <a href="/#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
