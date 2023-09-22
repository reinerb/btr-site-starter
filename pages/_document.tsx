import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-50 transition-colors duration-200 dark:bg-neutral-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
