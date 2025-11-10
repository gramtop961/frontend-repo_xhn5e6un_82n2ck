import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          About
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        >
          I’m a UI enthusiast exploring 2025 design trends — motion-first interfaces, soft depth,
          tactile hover states, and clean typographic systems. I prototype quickly, iterate often,
          and care about delightful details. Open to internships and collaborations.
        </motion.p>
      </div>
    </section>
  )
}
