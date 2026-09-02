import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'RoboSUST — Robotics For Glory',
  description: 'RoboSUST landing page rebuilt with Next.js, TypeScript, and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} bg-[#05070c] text-[#f5f7fb] antialiased`}>
        {children}
      </body>
    </html>
  );
}
