import Image from 'next/image'
import { Quote } from 'lucide-react'
import { testimonials, type Testimonial } from '@/lib/data'

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:w-[22rem]">
      <Quote className="size-7 text-primary/30" aria-hidden="true" />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-card-foreground">
        {t.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
          <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-bold text-foreground">{t.name}</span>
          <span className="text-xs font-semibold text-primary">
            {t.rank} &middot; {t.exam}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: Testimonial[]
  reverse?: boolean
  duration: string
}) {
  const doubled = [...items, ...items]
  return (
    <div className="group relative flex overflow-hidden">
      <div
        className={
          reverse
            ? 'flex w-max gap-4 pr-4 animate-marquee-reverse group-hover:[animation-play-state:paused]'
            : 'flex w-max gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]'
        }
        style={{ ['--marquee-duration' as string]: duration }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsMarquee() {
  const firstRow = testimonials.slice(0, 3)
  const secondRow = testimonials.slice(3)

  return (
    <section className="border-y border-border bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Wall of Thoughts
        </span>
        <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          What our achievers say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
          Real words from students who turned relentless effort into national
          ranks. Hover to pause and read their stories.
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        <MarqueeRow items={firstRow} duration="38s" />
        <MarqueeRow items={secondRow} reverse duration="44s" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary/40 to-transparent sm:w-32"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary/40 to-transparent sm:w-32"
        />
      </div>
    </section>
  )
}
