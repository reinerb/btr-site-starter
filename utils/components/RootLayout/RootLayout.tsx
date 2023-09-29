import Head from "next/head";
import React from "react";
import { twMerge } from "tailwind-merge";
import Header from "./Header";
import Footer from "./Footer";
import dynamic from "next/dynamic";

type RootLayoutProps = {
  title: string;
  children?: React.ReactNode;
  metaDescription?: string;
  container?: boolean;
  headerContainer?: boolean;
  footerContainer?: boolean;
  className?: string;
};

function RootLayout({
  title,
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
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header
          className="bg-neutral-100 transition-colors duration-300 dark:bg-neutral-900"
          container={headerContainer}
        />
        {container ? (
          <div>
            <main className={twMerge("container mx-8 my-4", className)}>
              {children}
            </main>
          </div>
        ) : (
          <main className={twMerge("mx-8 my-4", className)}>{children}</main>
        )}
        <Footer container={footerContainer} />
      </div>
    </>
  );
}

export default RootLayout;
