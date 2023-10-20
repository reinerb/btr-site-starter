import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import type { NavLink } from "@/utils/types/types";

const ColorModeSwitcher = dynamic(() => import("../ColorModeSwitcher"), {
  ssr: false,
});

type DesktopNavProps = {
  navLinks: NavLink[];
  className?: string;
};

function DesktopNav({ navLinks, className }: DesktopNavProps) {
  return (
    <div className={twMerge("flex items-center gap-4", className)}>
      <nav>
        <ul className={"flex items-center gap-4"}>
          {navLinks.map(({ name, href }, index) => (
            <li key={index}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ColorModeSwitcher />
    </div>
  );
}

export default DesktopNav;
