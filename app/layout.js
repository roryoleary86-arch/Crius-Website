import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crius AI — AI Consultancy for the Legal Profession",
  description:
    "Crius is an Irish AI consultancy built for law firms and in-house legal teams. Every engagement starts with the free Crius Consultation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <div className="page-fade">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
