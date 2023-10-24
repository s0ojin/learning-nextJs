import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center gap-7 mb-[10px] bg-white p-6">
          <div className="font-bold text-[20px]">
            <Link href="/">LearningNEXTJS</Link>
          </div>
          <Link href="/list">List</Link>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
