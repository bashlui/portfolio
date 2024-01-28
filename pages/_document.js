import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Urbanist&display=swap" rel="stylesheet" />
      <body className="bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
