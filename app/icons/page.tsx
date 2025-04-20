"use client";

import { AlignLeft, Search, Dot } from "gracias-react";
import * as GIcons from "gracias-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function toKebabCase(str: string): string {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2") // split capital groups
    .replace(/([a-z\d])([A-Z])/g, "$1-$2") // split camelCase
    .replace(/([a-zA-Z])([0-9])/g, "$1-$2") // split letters and numbers
    .replace(/([0-9])([a-zA-Z])/g, "$1-$2") // split numbers and letters
    .replace(/([a-z])([A-Z])/g, "$1-$2") // handle lower to upper
    .toLowerCase();
}

export default function Icons() {
  const [selected, setSelected] = useState("");
  const SelectedIcon = GIcons[selected as keyof typeof GIcons];
  const [metadata, setMetadata] = useState<{
    tags: string[];
    categories: string[];
    contributors: string[];
  } | null>(null);

  useEffect(() => {
    if (!selected) return;

    const kebab = toKebabCase(selected);
    fetch(`/icons/${kebab}.json`)
      .then((res) => res.json())
      .then((data) => {
        setMetadata({
          tags: data.tags || [],
          categories: data.categories || [],
          contributors: data.contributors || [],
        });
      })
      .catch(() => setMetadata(null));
  }, [selected]);

  return (
    <>
      <main>
        <div className="md:hidden flex justify-between text-muted px-5 border border-muted-light mt-4 border-x-0 py-3 items-center">
          <button className="flex-row flex gap-2 hover:text-black cursor-pointer duration-300 items-center">
            <AlignLeft />
            Menu
          </button>
          <button className="flex-row flex gap-2 hover:text-black cursor-pointer duration-300 items-center">
            Return to top
          </button>
        </div>
        <section className="px-5 mt-6">
          <div className="w-full bg-muted-light-light h-12 hover:bg-muted-light duration-300 cursor-text items-center flex gap-3 rounded-pixel-2 px-4 py-2">
            <Search className="w-8 h-8 text-muted" />
            <input
              className="w-full border-none focus:outline-none"
              placeholder={`Search ${Object.keys(GIcons).length} icons ...`}
            ></input>
          </div>
          <div className="flex flex-wrap gap-3 mt-5 justify-center">
            {Object.entries(GIcons).map(([name, Icon]) => (
              <div
                key={name}
                className="relative group flex justify-center"
                onClick={() => setSelected(name)}
              >
                <div className="flex flex-col items-center text-xs w-14 h-14 justify-center bg-muted-light-light rounded-pixel-2 cursor-pointer hover:bg-muted-light duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="flex justify-center absolute mt-12 px-2 py-1 bg-accent text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap z-50 pointer-events-none">
                  {toKebabCase(name)}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      {selected && (
        <div className="fixed w-full bottom-0 h-72 bg-white z-50">
          <div className="flex mt-4 mx-6">
            <div
              className="w-64 h-64 bg-muted-light-light rounded-pixel-4 flex justify-center items-center"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ebebef 1px, transparent 1px), linear-gradient(to bottom, #ebebef 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            >
              {SelectedIcon && <SelectedIcon className="h-64 w-64" />}
            </div>
            <div className="px-6 mt-2">
              <h1 className="text-2xl">{toKebabCase(selected)}</h1>
              {metadata && (
                <div className="mt-4">
                  <div className="flex text-muted flex-wrap">
                    {metadata.tags.map((tag, index) => (
                      <p key={index} className="flex items-center">
                        {index != 0 && <Dot className="w-6 h-6" />}
                        {tag}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    {metadata.categories.map((category, index) => (
                      <p
                        key={index}
                        className="flex items-center bg-muted-light-light px-4 text-lg rounded-pixel-2 hover:bg-muted-light duration-300 cursor-pointer"
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 md:justify-start mt-3">
                <Link
                  href="/icons"
                  className="bg-accent hover:bg-accent-light duration-300 px-5 text-white py-1 rounded-pixel-4"
                >
                  See in action
                </Link>
                <Link
                  href="/guide"
                  className="bg-muted-light hover:bg-[#e8e4ec] duration-300 px-5 py-1 rounded-pixel-4"
                >
                  Download PNG
                </Link>
                <Link
                  href="https://github.com/aapelix/lucixel"
                  className="bg-muted-light hover:bg-[#e8e4ec] duration-300 px-5 py-1 rounded-pixel-4"
                >
                  Copy JSX
                </Link>
              </div>
              {metadata && (
                <div className="flex absolute bottom-5 right-3 items-center">
                  <p className="mr-5">Contributors:</p>
                  {metadata.contributors.map((butor, index) => (
                    <Image
                      key={index}
                      src={`https://github.com/${butor}.png`}
                      width={44}
                      height={44}
                      className={`rounded-pixel-4 hover:scale-110 cursor-pointer ${index != 0 && "-translate-x-4"}`}
                      alt={butor}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
