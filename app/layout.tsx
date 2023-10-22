import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "YOUR CAR",
  description: "bring home your dream car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
