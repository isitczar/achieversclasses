'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, GraduationCap, LogIn, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type NavItem = {
  label: string
  links: { label: string; description: string }[]
}

const navItems: NavItem[] = [
  {
    label: 'Courses',
    links: [
      { label: 'JEE Main & Advanced', description: 'Class 11, 12 & Droppers' },
      { label: 'NEET UG', description: 'Medical entrance preparation' },
      { label: 'Foundation (8–10)', description: 'Early NTSE & Olympiad edge' },
    ],
  },
  {
    label: 'Admissions',
    links: [
      { label: 'Scholarship Test', description: 'Up to 100% fee waiver' },
      { label: 'Fee Structure', description: 'Transparent, flexible plans' },
      { label: 'Apply Online', description: 'Secure your seat in minutes' },
    ],
  },
  {
    label: 'Results',
    links: [
      { label: 'JEE Toppers 2025', description: 'AIR 42 & 200+ selections' },
      { label: 'NEET Toppers 2025', description: 'Record medical selections' },
      { label: 'Hall of Fame', description: 'A decade of top ranks' },
    ],
  },
  {
    label: 'Batches',
    links: [
      { label: 'Offline Batches', description: 'Classroom-first learning' },
      { label: 'Online Live Batches', description: 'Learn from anywhere' },
      { label: 'Weekend Batches', description: 'For school-going students' },
    ],
  },
  {
    label: 'Study Material',
    links: [
      { label: 'Practice Modules', description: 'Layered problem sets' },
      { label: 'Test Series', description: 'AI-analyzed mock exams' },
      { label: 'Previous Papers', description: '20+ years, fully solved' },
    ],
  },
  {
    label: 'About Us',
    links: [
      { label: 'Our Story', description: '15+ years of excellence' },
      { label: 'Faculty', description: 'IITian & doctor mentors' },
      { label: 'Centres', description: 'Find a campus near you' },
    ],
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2.5" aria-label="Achievers Classes home">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-foreground">
              Achievers Classes
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Elite Coaching Institute
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
                <ChevronDown
                  className="size-4 text-muted-foreground transition-transform group-hover:rotate-180"
                  aria-hidden="true"
                />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-lg shadow-foreground/5">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href="#courses"
                      className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                    >
                      <span className="block text-sm font-semibold text-popover-foreground">
                        {link.label}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {link.description}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" className="gap-1.5 bg-transparent">
            <LogIn className="size-4" aria-hidden="true" />
            Student Portal Login
          </Button>
          <Button size="sm" render={<a href="#enroll" />}>
            Enroll Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[61px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => {
              const isOpen = openAccordion === item.label
              return (
                <div key={item.label} className="border-b border-border/70">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : item.label)}
                    className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-foreground"
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'size-5 text-muted-foreground transition-transform',
                        isOpen && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <ul className="pb-3">
                      {item.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href="#courses"
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="outline" className="gap-1.5 bg-transparent">
                <LogIn className="size-4" aria-hidden="true" />
                Student Portal Login
              </Button>
              <Button render={<a href="#enroll" onClick={() => setMobileOpen(false)} />}>
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
