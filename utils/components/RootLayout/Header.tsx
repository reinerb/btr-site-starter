import React from "react";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const RootNav = dynamic(() => import("./RootNav"), { ssr: false });

type HeaderProps = {
  container?: boolean;
  className?: string;
};

function Header({ container, className }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "flex items-center justify-between px-8 py-4",
        container && "container",
        className,
      )}
    >
      <h1 className="block text-4xl" aria-label="logo">
        <FontAwesomeIcon icon={faCode} /> Site Logo
      </h1>
      <RootNav />
    </header>
  );
}

export default Header;
