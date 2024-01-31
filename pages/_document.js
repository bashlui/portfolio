import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Urbanist&display=swap" rel="stylesheet" />
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
