import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Basant Kumar - Senior Full Stack Developer | MERN Stack & AI Solutions",
    template: "%s | Basant Kumar Portfolio"
  },
  description: "Senior Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native solutions. Expert in building scalable web applications and enterprise integrations.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "AI Chatbots",
    "Cloud Deployment",
    "AWS",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Enterprise Integration",
    "Microservices",
    "DevOps",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "Technical Lead"
  ],
  authors: [{ name: "Basant Kumar" }],
  creator: "Basant Kumar",
  publisher: "Basant Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio.basantk.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.basantk.com',
    title: 'Basant Kumar - Senior Full Stack Developer | MERN Stack & AI Solutions',
    description: 'Senior Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native solutions. Expert in building scalable web applications and enterprise integrations.',
    siteName: 'Basant Kumar Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Basant Kumar - Senior Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basant Kumar - Senior Full Stack Developer | MERN Stack & AI Solutions',
    description: 'Senior Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native solutions.',
    images: ['/og-image.jpg'], // Same as OpenGraph image
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#181f2a" />
        <meta name="msapplication-TileColor" content="#181f2a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Basant Kumar",
              "jobTitle": "Senior Full Stack Developer",
              "description": "Senior Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native solutions.",
              "url": "https://portfolio.basantk.com",
              "image": "https://portfolio.basantk.com/profile.jpeg",
              "sameAs": [
                "https://www.linkedin.com/in/basantkumar2/",
                "https://github.com/yadavbasant"
              ],
              "knowsAbout": [
                "Full Stack Development",
                "MERN Stack",
                "Next.js",
                "React",
                "Node.js",
                "AI Chatbots",
                "Cloud Deployment",
                "AWS",
                "MongoDB",
                "TypeScript",
                "JavaScript",
                "Enterprise Integration",
                "Microservices",
                "DevOps"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "BlackBeltHelp"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "email": "kumarbasant229@gmail.com",
              "telephone": "+91 8107968482"
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Basant Kumar Portfolio",
              "url": "https://portfolio.basantk.com",
              "description": "Senior Full Stack Developer Portfolio showcasing MERN stack, Next.js, AI chatbots, and cloud-native solutions.",
              "author": {
                "@type": "Person",
                "name": "Basant Kumar"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://portfolio.basantk.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
