import { BrainCircuit, MessagesSquare, Users, UserRoundCheck } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Faculty',
    description:
      'Learn from IITians, doctors, and educators with a decade-plus of producing top ranks.',
  },
  {
    icon: MessagesSquare,
    title: 'Daily Doubt Resolution',
    description:
      'Dedicated daily sessions ensure no question ever goes unanswered overnight.',
  },
  {
    icon: UserRoundCheck,
    title: 'Personal Mentorship',
    description:
      'One-on-one mentors track your progress, set targets, and keep you accountable.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Based Test Analytics',
    description:
      'Every test is analyzed to pinpoint weak areas and prescribe a precise study plan.',
  },
]

export function WhyChoose() {
  return (
    <section id="about" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Why Achievers
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Built for serious results
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything we do is engineered around one outcome: your rank. Here
            is what sets our ecosystem apart.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
