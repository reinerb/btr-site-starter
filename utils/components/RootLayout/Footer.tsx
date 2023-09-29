import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type FooterProps = {
  container?: boolean;
  className?: string;
};

function Footer({ container, className }: FooterProps) {
  return (
    <footer
      className={twMerge(
        "flex justify-center gap-4 px-8 py-4",
        container && "container",
        className,
      )}
    >
      <p>
        Site by <Link href="https://btreiner.com">Ben Reiner</Link>
      </p>
    </footer>
  );
}

export default Footer;
