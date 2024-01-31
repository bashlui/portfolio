import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400&display=swap" rel="stylesheet"></link>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
