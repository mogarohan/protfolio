import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton"; 
import ScrollToTopButton from "./components/ScrollToTopButton"; // <--- Yeh nayi line add karein

export const metadata: Metadata = {
  title: "Rohan Moga | Full Stack & React Native Developer",
  description: "M.Sc. IT Graduate | 4th University Rank @ SPU | Full Stack Developer | React Native | PHP | Laravel | Python",
  keywords: "Rohan Moga, Full Stack Developer, React Native, PHP, Laravel, Next.js, Gujarat, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="antialiased font-sans text-gray-200 bg-[#050505] w-full overflow-x-hidden">
        {children}
        <ScrollToTopButton /> {/* <--- Scroll To Top Button yahan add karein */}
        <WhatsAppButton /> 
      </body>
    </html>
  );
}