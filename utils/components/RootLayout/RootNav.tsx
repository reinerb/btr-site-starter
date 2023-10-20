"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import React from "react";
import ResponsiveNav from "../Navigation/ResponsiveNav";
import type { NavLink } from "@/utils/types/types";
import DesktopNav from "../Navigation/DesktopNav";

const ColorModeSwitcher = dynamic(() => import("../ColorModeSwitcher"), {
  ssr: false,
});

type RootNavProps = {
  navLinks: NavLink[];
  desktopClassName?: string;
  responsiveClassName?: string;
};

function RootNav({
  navLinks,
  desktopClassName,
  responsiveClassName,
}: RootNavProps) {
  const { width } = useWindowSize();
  const md = width && width >= 768;

  return (
    <>
      {md ? (
        <DesktopNav navLinks={navLinks} className={desktopClassName} />
      ) : (
        <ResponsiveNav navLinks={navLinks} className={responsiveClassName} />
      )}
    </>
  );
}

export default RootNav;
