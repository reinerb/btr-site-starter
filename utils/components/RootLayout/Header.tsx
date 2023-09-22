import React from "react";
import { twMerge } from "tailwind-merge";
import RootNav from "./RootNav";

type HeaderProps = {
  container?: boolean;
  className?: string;
};

function Header({ container, className }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "flex justify-between px-8 py-4",
        container && "container",
        className,
      )}
    >
      <h1 className="block text-4xl" aria-label="logo">
        Site Title
      </h1>
      <RootNav />
    </header>
  );
}

export default Header;
