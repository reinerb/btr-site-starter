"use client";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const ColorModeSwitcher = dynamic(() => import("../ColorModeSwitcher"), {
  ssr: false,
});

type NavLink = {
  name: string;
  href: string;
};

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function RootNav() {
  const { width } = useWindowSize();
  const [active, setActive] = useState(false);
  const md = width && width >= 768;

  console.log(md);

  const baseNav = (
    <nav>
      <ul
        className={twMerge(
          "flex items-center gap-4",
          !md && "flex-grow flex-col",
        )}
      >
        {links.map(({ name, href }, index) => (
          <li key={index}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  const mdNav = (
    <div className="flex items-center gap-4">
      {baseNav}
      <ColorModeSwitcher />
    </div>
  );

  const xsNav = (
    <>
      <button
        className="block text-2xl text-neutral-950 transition-colors duration-300 hover:text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-200"
        onClick={() => setActive(true)}
        aria-label="Open navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={twMerge(
          "fixed right-0 top-0 z-50 h-screen w-full origin-right bg-neutral-100 px-8 py-4 transition-transform duration-500 ease-in-out dark:bg-neutral-900 sm:w-1/2 sm:duration-300",
          active ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between">
          <ColorModeSwitcher />
          <button
            className="block text-2xl text-neutral-950 hover:text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-200"
            onClick={() => setActive(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        {baseNav}
      </div>
      <div
        aria-hidden
        className={twMerge(
          "fixed left-0 top-0 z-40 h-screen w-screen bg-neutral-950 bg-opacity-50 transition-opacity duration-300",
          active ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setActive(false)}
      />
    </>
  );

  return <>{md ? mdNav : xsNav}</>;
}

export default RootNav;
