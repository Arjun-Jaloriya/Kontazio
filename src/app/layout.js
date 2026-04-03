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

  // --- Favicon અને Icons સેક્શન ---
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Default favicon
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // --- OpenGraph (WhatsApp/LinkedIn શેરિંગ માટે) ---
  openGraph: {
    title: "Kontazio Private Limited",
    description:
      "Your trusted partner in Pharmaceutical and Regulatory solutions.",
    url: "https://kontazio.com",
    siteName: "Kontazio",
    images: [
      {
        url: "/Kontaziologo.png", // JPEG ને બદલે ટ્રાન્સપરન્ટ PNG વાપરવું સારું
        width: 1200, // OpenGraph માટે 1200x630 બેસ્ટ સાઈઝ છે
        height: 630,
        alt: "Kontazio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // --- Twitter માટે ---
  twitter: {
    card: "summary_large_image",
    title: "Kontazio Private Limited",
    description: "Expert Pharmaceutical & Regulatory Services.",
    images: ["/Kontaziologo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // આ રહ્યો તમારો JSON-LD Schema કોડ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kontazio Private Limited",
    "url": "https://kontazio.com",
    "logo": "https://kontazio.com/Kontaziologo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9913701668", // તમારો નંબર અહીં લખો
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Gujarati", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/kontazio", // તમારી લિંક્સ અહીં નાખો
      "https://facebook.com/kontazio"
    ]
  };

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {/* Schema Markup ને Inject કરો */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}