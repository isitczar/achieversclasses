'use client'

import { useState } from 'react'
import { ArrowRight, CalendarDays, Check, MonitorPlay } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { programs } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Courses() {
  const [active, setActive] = useState(programs[0].id)
  const activeProgram = programs.find((p) => p.id === active) ?? programs[0]

  return (
    <section id="courses" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Programs
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Courses &amp; target programs
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Structured tracks for every stage of the journey, each engineered
            for measurable rank improvement.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Course programs"
          className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 p-1.5"
        >
          {programs.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={active === p.id}
              onClick={() => setActive(p.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5',
                active === p.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                {activeProgram.label}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                <MonitorPlay className="size-3.5" aria-hidden="true" />
                {activeProgram.mode}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-card-foreground">
              {activeProgram.tagline}
            </h3>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <CalendarDays className="size-4" aria-hidden="true" />
              {activeProgram.batchStart}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button render={<a href="#enroll" />}>
                Explore Syllabus
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button variant="outline" className="bg-transparent" render={<a href="#enroll" />}>
                Download Brochure
              </Button>
            </div>
          </div>

          <ul className="flex flex-col justify-center gap-3 rounded-xl bg-secondary/40 p-5">
            {activeProgram.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
