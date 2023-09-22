import Head from "next/head";
import React from "react";
import Header from "./Header";
import { twMerge } from "tailwind-merge";
import Footer from "./Footer";

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
      <Header container={headerContainer} />
      {container ? (
        <div>
          <main className={twMerge("container mx-8", className)}>
            {children}
          </main>
        </div>
      ) : (
        <main className={className}>{children}</main>
      )}
      <Footer container={footerContainer} />
    </>
  );
}

export default RootLayout;
