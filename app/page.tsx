import { HeroSection } from "@/components/hero-section"
import { ScheduleSection } from "@/components/schedule-section"
import { CosplaySection } from "@/components/cosplay-section"
import { InfoSection } from "@/components/info-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Estrelas de fundo */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      <HeroSection />
      <ScheduleSection />
      <CosplaySection />
      <InfoSection />
      <Footer />
    </main>
  )
}
