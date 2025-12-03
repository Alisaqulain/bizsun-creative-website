import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Preloader } from "@/components/layout/preloader"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { ToastProvider } from "@/components/ui/toast"
import { Chatbox } from "@/components/layout/chatbox"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Bizsun Creative | Digital Branding & Marketing Agency",
    template: "%s | Bizsun Creative",
  },
  description: "India's premier audio-visual production house. Professional photography, video production, and complete production services. Quality is our identity, commitment is our strength.",
  keywords: ["audio visual production", "photography services", "video production", "production house", "TV commercials", "corporate films", "fashion photography", "product photography", "e-commerce shoots", "4K studio", "Mumbai", "Delhi", "Kolkata"],
  authors: [{ name: "Bizsun Creative" }],
  creator: "Bizsun Creative",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.bizsoncreative.com",
      siteName: "Bizsun Creative",
      title: "Bizsun Creative | Audio-Visual Production House",
      description: "Professional photography, video production, and complete production services. Quality is our identity, commitment is our strength.",
      images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bizsun Creative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizsun Creative | Audio-Visual Production House",
    description: "Professional photography, video production, and complete production services. Quality is our identity, commitment is our strength.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/Bizsun Logo.png",
    shortcut: "/Bizsun Logo.png",
    apple: "/Bizsun Logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bizsun Creative",
    description: "Audio-visual production house offering photography, video production, and complete production services. Quality is our identity, commitment is our strength.",
    url: "https://bizsuncreative.com",
    logo: "https://www.bizsoncreative.com/Bizsun Logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-70441-78863",
      contactType: "customer service",
      email: "info@bizsoncreative.com",
    },
    sameAs: [
      "https://www.facebook.com/bizsuncreative",
      "https://www.twitter.com/bizsuncreative",
      "https://www.instagram.com/bizsuncreative",
      "https://www.linkedin.com/company/bizsuncreative",
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#F97316" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <Preloader />
            <ScrollProgress />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
            <Chatbox />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
