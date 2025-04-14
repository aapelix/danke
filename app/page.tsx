import Link from "next/link";
import {
  AlarmClockOff12,
  Instagram12,
  ArrowBigRightDash12,
  Pickaxe12,
  ArrowBigLeft12,
  Apple12,
  AlignCenterVertical12,
  AlignLeft12,
  ArrowDownAZ12,
  AlarmClockPlus12,
  Expand12,
  Armchair12,
  Airplay12,
  AArrowUp12,
  ArrowBigUpDash12,
  Sun12,
  Anchor12,
  Annoyed12,
  AlarmClockMinus12,
  AlignEndVertical12,
  Cloud12,
  Album12,
  AlignCenter12,
  Users12,
  ArrowBigRight12,
  AlarmClockCheck12,
  AppWindow12,
  Compass12,
  Youtube12,
  TreeDeciduous12,
  AArrowDown12,
  AlarmClock12,
  AlignJustify12,
  AirVent12,
  AppWindowMac12,
  AlignRight12,
  SunDim12,
  Ampersands12,
  AlignHorizontalDistributeCenter12,
  Angry12,
  ArchiveX12,
  ArrowDown1012,
  ArrowBigDownDash12,
  Search12,
  Aperture12,
  Palette12,
  PackageCheck12,
} from "@aapelix/pixels";
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
                <Search12 /> Search 1565 icons...
              </Link>
              <div className="grid md:grid-cols-8 grid-cols-11 grid-rows-4 bg-muted-light-light rounded-pixel-2 gap-3 px-3 mt-4 w-full py-3">
                <AlarmClockOff12 className="w-9 h-9" />
                <Instagram12 className="w-9 h-9" />
                <ArrowBigRightDash12 className="w-9 h-9" />
                <Pickaxe12 className="w-9 h-9" />
                <ArrowBigLeft12 className="w-9 h-9" />
                <Apple12 className="w-9 h-9" />
                <AlignCenterVertical12 className="w-9 h-9" />
                <AlignLeft12 className="w-9 h-9" />
                <ArrowDownAZ12 className="w-9 h-9" />
                <AlarmClockPlus12 className="w-9 h-9" />
                <Expand12 className="w-9 h-9" />
                <Armchair12 className="w-9 h-9" />
                <Airplay12 className="w-9 h-9" />
                <AArrowUp12 className="w-9 h-9" />
                <ArrowBigUpDash12 className="w-9 h-9" />
                <Sun12 className="w-9 h-9" />
                <Anchor12 className="w-9 h-9" />
                <Annoyed12 className="w-9 h-9" />
                <AlarmClockMinus12 className="w-9 h-9" />
                <AlignEndVertical12 className="w-9 h-9" />
                <Cloud12 className="w-9 h-9" />
                <Album12 className="w-9 h-9" />
                <AlignCenter12 className="w-9 h-9" />
                <Users12 className="w-9 h-9" />
                <ArrowBigRight12 className="w-9 h-9" />
                <AlarmClockCheck12 className="w-9 h-9" />
                <AppWindow12 className="w-9 h-9" />
                <Compass12 className="w-9 h-9" />
                <Youtube12 className="w-9 h-9" />
                <TreeDeciduous12 className="w-9 h-9" />
                <AArrowDown12 className="w-9 h-9" />
                <AlarmClock12 className="w-9 h-9" />
                <AlignJustify12 className="w-9 h-9 block md:hidden" />
                <AirVent12 className="w-9 h-9 block md:hidden" />
                <AppWindowMac12 className="w-9 h-9 block md:hidden" />
                <AlignRight12 className="w-9 h-9 block md:hidden" />
                <SunDim12 className="w-9 h-9 block md:hidden" />
                <Ampersands12 className="w-9 h-9 block md:hidden" />
                <AlignHorizontalDistributeCenter12 className="w-9 h-9 block md:hidden" />
                <Angry12 className="w-9 h-9 block md:hidden" />
                <ArchiveX12 className="w-9 h-9 block md:hidden" />
                <ArrowDown1012 className="w-9 h-9 block md:hidden" />
                <ArrowBigDownDash12 className="w-9 h-9 block md:hidden" />
                <Search12 className="w-9 h-9 block md:hidden" />
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-15 gap-4">
            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <Expand12 className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Lightweight + Scalable</h1>
              <p className="text-muted">
                Icons are lightweight, highly optimized scalable vector graphics
                (SVG).
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <Aperture12 className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Clean + consistent</h1>
              <p className="text-muted">
                Designed with a strict set of design rules for consistency in
                style and readability.
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <Palette12 className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Customizable</h1>
              <p className="text-muted">
                Customize the color, size, stroke width, and more.
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <PackageCheck12 className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Packages support</h1>
              <p className="text-muted">
                Luxicel is available as a package for all major package
                managers.
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <TreeDeciduous12 className="text-accent w-8 h-8" />
              </div>
              <h1 className="mt-6 text-xl">Tree shakable</h1>
              <p className="text-muted">
                The icons are tree shakable, so you only import the icons you
                use.
              </p>
            </div>

            <div className="bg-muted-light-light flex flex-col rounded-pixel-4 px-6 py-4">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-pixel-2">
                <Users12 className="text-accent w-8 h-8" />
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
