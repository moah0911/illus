import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Knowledge Graph Studio",
  description: "Generate a concept graph from unstructured PDFs using a local LLM pipeline."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
