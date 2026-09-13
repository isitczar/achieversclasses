import Image from 'next/image'
import { Trophy } from 'lucide-react'
import { topPerformers } from '@/lib/data'

export function HallOfFame() {
  return (
    <section id="results" className="border-y border-border bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            <Trophy className="size-4" aria-hidden="true" />
            Hall of Fame
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Our top performers of 2025
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A snapshot of the achievers who set the benchmark this year. Their
            discipline, our mentorship.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {topPerformers.map((student) => (
            <li
              key={student.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={student.photo}
                  alt={`${student.name}, ${student.rank} in ${student.exam}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 rounded-full bg-primary px-2.5 py-1 text-xs font-extrabold text-primary-foreground shadow-md">
                  {student.rank}
                </span>
              </div>
              <div className="p-3 text-center">
                <p className="truncate text-sm font-bold text-card-foreground">
                  {student.name}
                </p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {student.exam}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
