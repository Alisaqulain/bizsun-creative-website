import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Preloader } from "@/components/layout/preloader"
import { ScrollProgress } from "@/components/layout/scroll-progress"
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
  description: "We create digital experiences that grow brands. Expert branding, web design, digital marketing, and creative solutions.",
  keywords: ["branding", "digital marketing", "web design", "creative agency", "brand identity", "website development", "SEO", "social media marketing"],
  authors: [{ name: "Bizsun Creative" }],
  creator: "Bizsun Creative",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizsuncreative.com",
    siteName: "Bizsun Creative",
    title: "Bizsun Creative | Digital Branding & Marketing Agency",
    description: "We create digital experiences that grow brands.",
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
    title: "Bizsun Creative | Digital Branding & Marketing Agency",
    description: "We create digital experiences that grow brands.",
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
    description: "Digital branding and marketing agency creating experiences that grow brands",
    url: "https://bizsuncreative.com",
    logo: "https://bizsuncreative.com/Bizsun Logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "customer service",
      email: "hello@bizsuncreative.com",
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
            <Chatbox />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
