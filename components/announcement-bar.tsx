import { ArrowRight, Sparkles } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-center text-xs sm:text-sm">
        <Sparkles className="hidden size-4 shrink-0 text-primary sm:block" aria-hidden="true" />
        <p className="font-medium">
          <span className="text-background/80">Admissions Open 2026:</span>{' '}
          New JEE, NEET &amp; Foundation batches + Scholarship Entrance Test
        </p>
        <a
          href="#enroll"
          className="group inline-flex shrink-0 items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline"
        >
          Apply Now
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  )
}
