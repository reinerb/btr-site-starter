"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";
import ResponsiveNav from "./ResponsiveNav";
import type { NavLink } from "@/utils/types/types";
import DesktopNav from "./DesktopNav";

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
