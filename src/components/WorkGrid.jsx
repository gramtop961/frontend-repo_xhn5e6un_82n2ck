import { motion } from 'framer-motion'
import { ExternalLink, Figma, Github } from 'lucide-react'

const projects = [
  {
    title: 'Motion Study — Cards',
    tags: ['Framer Motion', '3D feel', 'Micro-interactions'],
    link: '#',
  },
  {
    title: 'UI Kit — Minimal Dashboard',
    tags: ['Design System', 'Tokens', 'Components'],
    link: '#',
  },
  {
    title: 'Concept — Neo Glass',
    tags: ['Glassmorphism', 'Blur', 'Light'],
    link: '#',
  },
]

export default function WorkGrid() {
  return (
    <section id="work" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="text-gray-600 mt-2">A mix of explorations and small builds as I learn and grow.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="inline-flex items-center gap-1 px-3 py-2 rounded-full border hover:bg-gray-50">
              <Figma size={16} /> Figma
            </a>
            <a href="#" className="inline-flex items-center gap-1 px-3 py-2 rounded-full border hover:bg-gray-50">
              <Github size={16} /> Code
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 text-xs px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
