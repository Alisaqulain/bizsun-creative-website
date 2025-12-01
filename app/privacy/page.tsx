import { PrivacyContent } from "@/components/legal/privacy-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Bizsun Creative",
  description: "Privacy Policy for Bizsun Creative - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return <PrivacyContent />
}

