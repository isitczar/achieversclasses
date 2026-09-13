import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react'

const footerCols = [
  {
    title: 'Courses',
    links: ['JEE Main & Advanced', 'NEET UG', 'Foundation (8–10)', 'Crash Courses', 'Test Series'],
  },
  {
    title: 'Institute',
    links: ['About Us', 'Faculty', 'Centres', 'Careers', 'Blog'],
  },
  {
    title: 'Admissions',
    links: ['Scholarship Test', 'Fee Structure', 'Apply Online', 'Student Portal', 'Refund Policy'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <span className="text-base font-extrabold tracking-tight">
                Achievers Classes
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              An elite coaching institute dedicated to transforming potential
              into top ranks across JEE, NEET, and national Olympiads.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-background/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                New Delhi 110001
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="tel:+911800123456" className="hover:text-background">
                  123456789 (Toll Free)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="mailto:admissions@achieversclasses.edu" className="hover:text-background">
                  temp@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-background">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-background/60">
            &copy; {new Date().getFullYear()} Achievers Classes. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-background/60">
            <a href="#" className="hover:text-background">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
