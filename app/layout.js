import "./globals.css";
import { DealsProvider } from "@/context/DealsContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Free tools for CSE students",
  description: "Browse, search and save free tools for engineering students (sample data).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <DealsProvider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        </DealsProvider>
      </body>
    </html>
  );
}
