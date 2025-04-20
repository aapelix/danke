import Link from "next/link";
import {
  AlarmClockOff,
  Instagram,
  ArrowBigRightDash,
  Pickaxe,
  ArrowBigLeft,
  Apple,
  AlignCenterVertical,
  AlignLeft,
  ArrowDownAZ,
  AlarmClockPlus,
  Expand,
  Armchair,
  Airplay,
  AArrowUp,
  ArrowBigUpDash,
  Sun,
  Anchor,
  Annoyed,
  AlarmClockMinus,
  AlignEndVertical,
  Cloud,
  Album,
  AlignCenter,
  Users,
  ArrowBigRight,
  AlarmClockCheck,
  AppWindow,
  Compass,
  Youtube,
  TreeDeciduous,
  AArrowDown,
  AlarmClock,
  AlignJustify,
  AirVent,
  AppWindowMac,
  AlignRight,
  SunDim,
  Ampersands,
  AlignHorizontalDistributeCenter,
  Angry,
  ArchiveX,
  ArrowDown10,
  ArrowBigDownDash,
  Search,
  Aperture,
  Palette,
  PackageCheck,
} from "gracias-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-24">
      <div className="flex justify-center">
        <div className="mx-4 sm:mx-24 md:mx-14 flex flex-col w-full justify-center">
          <section className="grid md:grid-cols-2 gap-2">
            <header className="text-5xl text-center md:text-left">
              <h1 className="text-accent">Lucide icons</h1>
              <h1 className="mt-1">but in pixel art</h1>
              <p className="text-2xl mt-4 text-muted">Made by the community.</p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
                <Link
                  href="/icons"
                  className="bg-accent hover:bg-accent-light duration-300 text-2xl px-5 text-white py-1 rounded-pixel-4"
                >
                  View all icons
                </Link>
                <Link
                  href="/guide"
                  className="bg-muted-light hover:bg-[#e8e4ec] duration-300 text-2xl px-5 py-1 rounded-pixel-4"
                >
                  Get Started
                </Link>
                <Link
                  href="https://github.com/aapelix/lucixel"
                  className="bg-muted-light hover:bg-[#e8e4ec] duration-300 text-2xl px-5 py-1 rounded-pixel-4"
                >
                  GitHub
                </Link>
              </div>
            </header>
            <div className="mt-12 text-2xl flex flex-col justify-center items-center">
              <Link
                href="/icons"
                className="bg-muted-light-light h-12 hover:bg-muted-light duration-300 cursor-text items-center flex gap-3 rounded-pixel-2 w-full px-4 py-2"
              >
                <Search /> Search 1565 icons...
              </Link>
              <div className="grid md:grid-cols-8 grid-cols-11 grid-rows-4 bg-muted-light-light rounded-pixel-2 gap-3 px-3 mt-4 w-full py-3">
                <AlarmClockOff className="w-9 h-9" />
                <Instagram className="w-9 h-9" />
                <ArrowBigRightDash className="w-9 h-9" />
                <Pickaxe className="w-9 h-9" />
                <ArrowBigLeft className="w-9 h-9" />
                <Apple className="w-9 h-9" />
                <AlignCenterVertical className="w-9 h-9" />
                <AlignLeft className="w-9 h-9" />
                <ArrowDownAZ className="w-9 h-9" />
                <AlarmClockPlus className="w-9 h-9" />
                <Expand className="w-9 h-9" />
                <Armchair className="w-9 h-9" />
                <Airplay className="w-9 h-9" />
                <AArrowUp className="w-9 h-9" />
                <ArrowBigUpDash className="w-9 h-9" />
                <Sun className="w-9 h-9" />
                <Anchor className="w-9 h-9" />
                <Annoyed className="w-9 h-9" />
                <AlarmClockMinus className="w-9 h-9" />
                <AlignEndVertical className="w-9 h-9" />
                <Cloud className="w-9 h-9" />
                <Album className="w-9 h-9" />
                <AlignCenter className="w-9 h-9" />
                <Users className="w-9 h-9" />
                <ArrowBigRight className="w-9 h-9" />
                <AlarmClockCheck className="w-9 h-9" />
                <AppWindow className="w-9 h-9" />
                <Compass className="w-9 h-9" />
                <Youtube className="w-9 h-9" />
                <TreeDeciduous className="w-9 h-9" />
                <AArrowDown className="w-9 h-9" />
                <AlarmClock className="w-9 h-9" />
                <AlignJustify className="w-9 h-9 block md:hidden" />
                <AirVent className="w-9 h-9 block md:hidden" />
                <AppWindowMac className="w-9 h-9 block md:hidden" />
                <AlignRight className="w-9 h-9 block md:hidden" />
                <SunDim className="w-9 h-9 block md:hidden" />
                <Ampersands className="w-9 h-9 block md:hidden" />
                <AlignHorizontalDistributeCenter className="w-9 h-9 block md:hidden" />
                <Angry className="w-9 h-9 block md:hidden" />
                <ArchiveX className="w-9 h-9 block md:hidden" />
                <ArrowDown10 className="w-9 h-9 block md:hidden" />
                <ArrowBigDownDash className="w-9 h-9 block md:hidden" />
                <Search className="w-9 h-9 block md:hidden" />
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-15 gap-4">
            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <Expand className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Lightweight + Scalable</h1>
              <p className="text-muted">
                Icons are lightweight, highly optimized scalable vector graphics
                (SVG).
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <Aperture className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Clean + consistent</h1>
              <p className="text-muted">
                Designed with a strict set of design rules for consistency in
                style and readability.
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <Palette className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Customizable</h1>
              <p className="text-muted">
                Customize the color, size, stroke width, and more.
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <PackageCheck className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Packages support</h1>
              <p className="text-muted">
                Luxicel is available as a package for all major package
                managers.
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <TreeDeciduous className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Tree shakable</h1>
              <p className="text-muted">
                The icons are tree shakable, so you only import the icons you
                use.
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <Users className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Actively updated</h1>
              <p className="text-muted">
                We try to get a pixel art version of an icon as soon as it has
                been added to Lucide
              </p>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center mt-15 text-muted">
            <p>Available For:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link href="/#">
                <Image
                  className="hover:opacity-60 duration-300"
                  src="/langs/js.png"
                  alt="js"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href="/#">
                <Image
                  className="hover:opacity-60 duration-300"
                  src="/langs/react.png"
                  alt="react"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href="/#">
                <Image
                  className="hover:opacity-60 duration-300"
                  src="/langs/vue.png"
                  alt="vue"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href="/#">
                <Image
                  className="hover:opacity-60 duration-300"
                  src="/langs/svelte.png"
                  alt="svelte"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href="/#">
                <Image
                  className="hover:opacity-60 duration-300"
                  src="/langs/preact.png"
                  alt="preact"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href="/#">
                <Image
                  className="hover:opacity-60 duration-300"
                  src="/langs/solid.png"
                  alt="solid"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href="/#">
                <Image
                  className="hover:opacity-60 duration-300"
                  src="/langs/angular.png"
                  alt="angular"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href="/#">
                <Image
                  className="hover:opacity-60 duration-300"
                  src="/langs/astro.png"
                  alt="astro"
                  width={36}
                  height={36}
                />
              </Link>
            </div>
            <Link
              href="/#"
              className="mt-4 px-4 bg-muted-light-light rounded-pixel-2 py-2 hover:bg-muted-light duration-300"
            >
              And more
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
