import Head from "next/head";
import React from "react";
import { twMerge } from "tailwind-merge";
import Header from "./Header";
import Footer from "./Footer";
import type { NavLink } from "@/utils/types/types";

const navLinks: NavLink[] = [
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

type RootLayoutProps = {
  title: string;
  metaDescription?: string;
  noHeader?: boolean;
  noFooter?: boolean;
  container?: boolean;
  headerContainer?: boolean;
  footerContainer?: boolean;
  className?: string;
  children?: React.ReactNode;
};

function RootLayout({
  title,
  noHeader,
  noFooter,
  children,
  metaDescription,
  container,
  headerContainer,
  footerContainer,
  className,
}: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="flex min-h-screen flex-col">
        {!noHeader && (
          <Header
            navLinks={navLinks}
            container={headerContainer}
            className="bg-neutral-100 transition-colors duration-300 dark:bg-neutral-900"
          />
        )}
        {container ? (
          <div className="flex-grow">
            <main className={twMerge("container mx-8 my-4", className)}>
              {children}
            </main>
          </div>
        ) : (
          <main className={twMerge("mx-8 my-4 flex-grow", className)}>
            {children}
          </main>
        )}
        {!noFooter && <Footer container={footerContainer} />}
      </div>
    </>
  );
}

export default RootLayout;
