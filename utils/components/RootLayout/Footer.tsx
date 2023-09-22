import React from "react";
import { twMerge } from "tailwind-merge";

type FooterProps = {
  container?: boolean;
  className?: string;
};

function Footer({ container, className }: FooterProps) {
  return (
    <footer
      className={twMerge("px-8 py-4", container && "container", className)}
    >
      Footer content goes here
    </footer>
  );
}

export default Footer;
