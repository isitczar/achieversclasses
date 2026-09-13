import { AnnouncementBar } from '@/components/announcement-bar'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TestimonialsMarquee } from '@/components/testimonials-marquee'
import { Courses } from '@/components/courses'
import { HallOfFame } from '@/components/hall-of-fame'
import { WhyChoose } from '@/components/why-choose'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TestimonialsMarquee />
        <Courses />
        <HallOfFame />
        <WhyChoose />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}
