import Link from "next/link";
import React from "react";
import { Knewave } from "next/font/google";

const rubikDistressed = Knewave({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <header className="mx-auto max-w-5xl w-full sticky top-0 z-50 h-12 px-6 flex items-center justify-between backdrop-blur-sm">
      <div>
        <Link href="/">
          <h2 className={`${rubikDistressed.className} text-xl`}>Jaimin</h2>
        </Link>
      </div>
      <div>
        <nav className="flex gap-4">
          <Link href="/projects">
            <h2>Projects</h2>
          </Link>
          <Link
            href="https://jaiminn.notion.site/18f9dd7317f9808c89d0eeb1f73bae61?v=18f9dd7317f98018acff000cfcdb8901"
            target="_blank"
          >
            <h2>Blogs</h2>
          </Link>
        </nav>
      </div>
    </header>
  );
}
