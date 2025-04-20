import Image from "next/image";
import Link from "next/link";
import { AlignRight, Ellipsis } from "gracias-react";

export default function NavBar() {
  return (
    <nav className="flex justify-between w-screen px-8 mt-3 text-xl items-center">
      <Link href="/">
        <div className="flex text-3xl items-center gap-2">
          <Image
            src="/lucide-icon.png"
            alt="Lucide icon in pixel art"
            width={50}
            height={50}
          />
          <h1>Lucixel</h1>
        </div>
      </Link>
      <div className="hidden gap-6 items-center md:flex">
        <Link className="hover:text-accent duration-300" href="/icons">
          Icons
        </Link>
        <Link className="hover:text-accent duration-300" href="/icons">
          Guide
        </Link>
        <Link className="hover:text-accent duration-300" href="/icons">
          Packages
        </Link>
        <Link className="hover:text-accent duration-300" href="/icons">
          Showcase
        </Link>
        <Link className="hover:text-accent duration-300" href="/icons">
          License
        </Link>
        <button className="cursor-pointer">
          <Ellipsis className="w-8 h-8 hover:text-accent duration-300" />
        </button>
      </div>
      <button className="block md:hidden cursor-pointer">
        <AlignRight className="w-8 h-8 hover:text-accent duration-300" />
      </button>
    </nav>
  );
}
