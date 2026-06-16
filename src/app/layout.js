import "./globals.css";
import Footer from "@/components/Footer";
import ConditionalNavbar from "@/components/ConditionalNavbar";

export const metadata = {
  title: {
    default: "Voxez",
    template: "%s | Voxez",
  },
  description:
    "Voxez is a modern icon library for frontend developers. Discover, customize, and integrate high-quality SVG icons into your web projects.",
  keywords: [
    "icon library",
    "svg icons",
    "frontend development",
    "react icons",
    "nextjs icons",
    "web design",
    "ui icons",
    "voxez",
  ],
  icons: {
    icon: "/voxezlogo.png",
    shortcut: "/voxezlogo.png",
    apple: "/voxezlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css"></link>
      </head>
      <body className="min-h-full flex flex-col">
        <ConditionalNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}