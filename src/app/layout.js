import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Kontazio Private Limited | Pharmaceutical & Regulatory Services",
    template: "%s | Kontazio",
  },

  description:
    "Kontazio Private Limited provides world-class pharmaceutical, herbal, and machinery regulatory services. Expert guidance for compliance and quality management.",

  keywords: [
    "Pharmaceutical Services",
    "Regulatory Compliance",
    "Herbal Products",
    "Machinery",
    "Kontazio",
    "Quality Management",
  ],

  openGraph: {
    title: "Kontazio Private Limited",
    description:
      "Your trusted partner in Pharmaceutical and Regulatory solutions.",
    url: "https://yourdomain.com",
    siteName: "Kontazio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
