import Head from "next/head";
import React from "react";
import { twMerge } from "tailwind-merge";
import Header from "./Header";
import Footer from "./Footer";

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
  const gridRows = noHeader
    ? noFooter
      ? "grid-rows-1"
      : "grid-rows-[1fr_auto]"
    : noFooter
    ? "grid-rows-[auto_1fr]"
    : "grid-rows[auto_1fr_auto]";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className={twMerge("grid min-h-screen", gridRows)}>
        {!noHeader && (
          <Header
            className="bg-neutral-100 transition-colors duration-300 dark:bg-neutral-900"
            container={headerContainer}
          />
        )}
        {container ? (
          <div>
            <main className={twMerge("container mx-8 my-4", className)}>
              {children}
            </main>
          </div>
        ) : (
          <main className={twMerge("mx-8 my-4", className)}>{children}</main>
        )}
        {!noFooter && <Footer container={footerContainer} />}
      </div>
    </>
  );
}

export default RootLayout;
