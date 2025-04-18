import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Holy Family Higher Secondary School | Excellence in Education",
  description: "Holy Family Higher Secondary School is a premier educational institution dedicated to academic excellence, personal growth, and preparing students for success in a rapidly changing world.",
  keywords: "school, education, higher secondary, learning, students, academics, admissions, holy family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
