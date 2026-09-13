'use client'

import { useState } from 'react'
import { CheckCircle2, GraduationCap, ShieldCheck, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustStats = [
  { icon: GraduationCap, value: '15,000+', label: 'Alumni' },
  { icon: TrendingUp, value: '98%', label: 'Selection Rate' },
  { icon: ShieldCheck, value: '15+', label: 'Years of Excellence' },
]

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

export function Hero() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 size-[28rem] rounded-full bg-chart-3/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
            <Star className="size-3.5 fill-primary text-primary" aria-hidden="true" />
            Rated #1 for JEE &amp; NEET results in the region
          </span>

          <h1 className="mt-6 text-pretty text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Transforming Potential into{' '}
            <span className="text-primary">Top Ranks</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Elite coaching for JEE Main &amp; Advanced, NEET, and National
            Olympiads. Expert mentorship, disciplined practice, and AI-driven
            insights that turn ambition into admission letters.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" render={<a href="#enroll" />}>
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" render={<a href="#courses" />}>
              Explore Programs
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <stat.icon className="mb-2 size-5 text-primary" aria-hidden="true" />
                <dt className="order-2 text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="order-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="enroll" className="lg:justify-self-end">
          <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-card-foreground">
                Book Free Counselling
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Talk to a mentor and get a personalized study roadmap.
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center gap-3 rounded-xl bg-accent px-4 py-10 text-center">
                <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
                <p className="text-base font-semibold text-foreground">
                  Thank you! We&apos;ll call you shortly.
                </p>
                <p className="text-sm text-muted-foreground">
                  Our counselling team reaches out within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground">
                    Full Name
                  </label>
                  <input id="name" name="name" required placeholder="Enter your name" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="exam" className="text-xs font-semibold text-foreground">
                      Target Exam
                    </label>
                    <select id="exam" name="exam" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select
                      </option>
                      <option>JEE (Main + Advanced)</option>
                      <option>NEET</option>
                      <option>Foundation / Olympiad</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="class" className="text-xs font-semibold text-foreground">
                      Class
                    </label>
                    <select id="class" name="class" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select
                      </option>
                      <option>Class 8–10</option>
                      <option>Class 11</option>
                      <option>Class 12</option>
                      <option>Dropper</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="city" className="text-xs font-semibold text-foreground">
                    City
                  </label>
                  <input id="city" name="city" required placeholder="Your city" className={inputClass} />
                </div>
                <Button type="submit" size="lg" className="mt-1 w-full">
                  Get Free Counselling
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to our terms &amp; privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
