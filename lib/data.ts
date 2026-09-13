export type Testimonial = {
  name: string
  exam: string
  rank: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ananya Sharma',
    exam: 'JEE Advanced 2025',
    rank: 'AIR 42',
    quote:
      'The daily doubt sessions changed everything for me. Faculty pushed me to think, not just memorize. I walked into the exam calm and prepared.',
    avatar: '/students/student-1.png',
  },
  {
    name: 'Rohan Verma',
    exam: 'NEET 2025',
    rank: 'AIR 118',
    quote:
      'Personal mentorship kept me accountable through the toughest months. The test analytics showed me exactly where to improve every week.',
    avatar: '/students/student-2.png',
  },
  {
    name: 'Ishita Nair',
    exam: 'JEE Main 2025',
    rank: '99.98 %ile',
    quote:
      'The study material is genuinely the best I have seen. Concise theory, layered problem sets, and zero fluff. It respected my time.',
    avatar: '/students/student-3.png',
  },
  {
    name: 'Aditya Rao',
    exam: 'NEET 2025',
    rank: 'AIR 356',
    quote:
      'I joined as a dropper feeling defeated. The mentors rebuilt my confidence and my fundamentals. This place turns setbacks into ranks.',
    avatar: '/students/student-4.png',
  },
  {
    name: 'Sneha Gupta',
    exam: 'JEE Advanced 2025',
    rank: 'AIR 209',
    quote:
      'Weekly full-length tests with instant AI analysis meant I never plateaued. Every mistake became a lesson within 24 hours.',
    avatar: '/students/student-5.png',
  },
  {
    name: 'Karthik Menon',
    exam: 'KVPY & Olympiad',
    rank: 'Gold Medalist',
    quote:
      'The Foundation program built my base in Class 9. By the time I reached Olympiads, advanced problems felt natural, almost fun.',
    avatar: '/students/student-6.png',
  },
]

export type Program = {
  id: string
  label: string
  tagline: string
  batchStart: string
  mode: string
  features: string[]
}

export const programs: Program[] = [
  {
    id: 'class-11',
    label: 'Class 11',
    tagline: 'Two-Year JEE / NEET Integrated Program',
    batchStart: 'Batches from 15 April 2026',
    mode: 'Offline & Online',
    features: [
      'Complete Class 11 + 12 syllabus coverage',
      'Weekly concept + doubt-clearing sessions',
      'Board + competitive exam integration',
      'Foundation-to-advanced problem ladders',
    ],
  },
  {
    id: 'class-12',
    label: 'Class 12',
    tagline: 'One-Year Focused Rank Booster',
    batchStart: 'Batches from 10 April 2026',
    mode: 'Offline & Online',
    features: [
      'Intensive revision of Class 11 concepts',
      'Full-length JEE / NEET mock test series',
      'Board exam mastery track included',
      'Personal mentor for target planning',
    ],
  },
  {
    id: 'droppers',
    label: 'Droppers',
    tagline: 'Dedicated One-Year Repeater Batch',
    batchStart: 'Batches from 5 May 2026',
    mode: 'Offline & Online',
    features: [
      'Ground-up revision with rank strategy',
      'Daily 8-hour structured study routine',
      'Bi-weekly performance mentorship calls',
      'AI-based weakness detection & drills',
    ],
  },
  {
    id: 'foundation',
    label: 'Foundation',
    tagline: 'Class 8–10 Early Advantage Program',
    batchStart: 'Batches from 20 April 2026',
    mode: 'Offline & Online',
    features: [
      'Strong Science & Maths fundamentals',
      'NTSE, Olympiad & KVPY preparation',
      'Habit-building and aptitude training',
      'Early exposure to competitive thinking',
    ],
  },
]

export type TopPerformer = {
  name: string
  rank: string
  exam: string
  photo: string
}

export const topPerformers: TopPerformer[] = [
  { name: 'Ananya Sharma', rank: 'AIR 42', exam: 'JEE Advanced 2025', photo: '/students/student-1.png' },
  { name: 'Rohan Verma', rank: 'AIR 118', exam: 'NEET 2025', photo: '/students/student-2.png' },
  { name: 'Sneha Gupta', rank: 'AIR 209', exam: 'JEE Advanced 2025', photo: '/students/student-5.png' },
  { name: 'Aditya Rao', rank: 'AIR 356', exam: 'NEET 2025', photo: '/students/student-4.png' },
  { name: 'Ishita Nair', rank: '99.98 %ile', exam: 'JEE Main 2025', photo: '/students/student-3.png' },
  { name: 'Karthik Menon', rank: 'Gold', exam: 'INChO Olympiad 2025', photo: '/students/student-6.png' },
]
