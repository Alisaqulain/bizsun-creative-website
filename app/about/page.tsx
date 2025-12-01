import { Story } from "@/components/about/story"
import { MissionVision } from "@/components/about/mission-vision"
import { Team } from "@/components/about/team"
import { Achievements } from "@/components/about/achievements"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Bizsun Creative",
  description: "Learn about Bizsun Creative - our story, mission, vision, and the talented team behind our award-winning creative solutions.",
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

