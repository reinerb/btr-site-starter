import Link from "next/link";
import React from "react";

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

function RootNav(props: RootNavProps) {
  return (
    <nav className="string">
      <ul>
        {links.map(({ name, href }, index) => (
          <li key={index}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default RootNav;
