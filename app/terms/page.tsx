import { TermsContent } from "@/components/legal/terms-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Bizsun Creative",
  description: "Terms of Service for Bizsun Creative - Read our terms and conditions for using our services.",
}

export default function TermsPage() {
  return <TermsContent />
}

