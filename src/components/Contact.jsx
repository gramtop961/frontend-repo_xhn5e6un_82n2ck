import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Let’s build something
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        >
          I’m available for freelance, internships, and collaborations.
          Email me or drop a DM — I’ll get back soon.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="mailto:you@example.com" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
            Email me
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-gray-300 bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors">
            DM on X
          </a>
        </div>
      </div>
    </section>
  )
}
