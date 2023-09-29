"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import ColorModeSwitcher from "../ColorModeSwitcher";

type RootNavProps = {
  className?: string;
};

type Link = {
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

function RootNav({ className }: RootNavProps) {
  const { width } = useWindowSize();

  const baseNav = (
    <nav>
      <ul>
        {links.map(({ name, href }, index) => (
          <li key={index}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className="flex items-center gap-4">
      <nav>
        <ul className={twMerge("flex gap-4", className)}>
          {links.map(({ name, href }, index) => (
            <li key={index}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ColorModeSwitcher />
    </div>
  );

  // return <>{baseNav}</>;
}

export default RootNav;
