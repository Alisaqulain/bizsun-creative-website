import { Story } from "@/components/about/story"
import { MissionVision } from "@/components/about/mission-vision"
import { Team } from "@/components/about/team"
import { Achievements } from "@/components/about/achievements"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Bizsun Creative",
  description: "Learn about Bizsun Creative - an audio-visual production house with experienced professionals and young creative-technical enthusiasts. Quality is our identity, commitment is our strength.",
}

export default function AboutPage() {
  return (
    <>
      <Story />
      <MissionVision />
      <Team />
      <Achievements />
    </>
  )
}

