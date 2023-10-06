"use client";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import ResponsiveNav from "../Navigation/ResponsiveNav";

const ColorModeSwitcher = dynamic(() => import("../ColorModeSwitcher"), {
  ssr: false,
});

type NavLink = {
  name: string;
  href: string;
};

const links: NavLink[] = [
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

  return <>{md ? mdNav : <ResponsiveNav links={links} />}</>;
}

export default RootNav;
