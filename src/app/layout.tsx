import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import WhatsAppButton from "@/components/WhatsAppButton";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Firo Vet — Cuidamos a Quien Más Amas",
  description:
    "Clínica veterinaria premium con atención integral para mascotas. Consultas, vacunación, cirugía, estética canina, urgencias 24/7. Veterinarios certificados con amor por los animales.",
  keywords:
    "veterinaria, clínica veterinaria, mascotas, perros, gatos, vacunación, cirugía veterinaria, estética canina, urgencias veterinarias, desparasitación, esterilización, consulta veterinaria, cuidado animal, CDMX",
  authors: [{ name: "Dra. María López" }],
  creator: "Firo Vet",
  publisher: "Firo Vet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.firovet.com",
    siteName: "Firo Vet",
    title: "Firo Vet — Cuidamos a Quien Más Amas",
    description:
      "Clínica veterinaria con amor y tecnología. Consultas, urgencias 24/7, cirugía, estética y más. Tu mascota en las mejores manos.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Firo Vet - Clínica Veterinaria Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firo Vet — Cuidamos a Quien Más Amas",
    description:
      "Clínica veterinaria moderna con atención integral. Urgencias 24/7, consultas, cirugía y más.",
    images: ["/images/og-image.jpg"],
    creator: "@firovet",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  alternates: {
    canonical: "https://www.firovet.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": "https://www.firovet.com",
    name: "Firo Vet",
    description:
      "Clínica veterinaria premium con atención integral. Consultas, cirugía, urgencias 24/7, estética canina y más.",
    url: "https://www.firovet.com",
    telephone: "+52-844-584-1876",
    email: "contacto@firovet.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. de los Animales 234, Col. Jardines",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      postalCode: "03100",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.3651,
      longitude: -99.1707,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/FiroVet",
      "https://www.instagram.com/firovet",
      "https://www.tiktok.com/@firovet",
    ],
    priceRange: "$$",
    image: "https://www.firovet.com/images/og-image.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "340",
      bestRating: "5",
    },
  };

  return (
    <html lang="es" className={`${heading.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
