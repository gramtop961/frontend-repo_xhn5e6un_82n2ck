import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid gap-8 md:grid-cols-12">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
            Product designer in the making, crafting playful, modern UIs
          </h1>
          <p className="mt-5 text-gray-600 text-lg max-w-xl">
            I explore motion, micro-interactions, and clean systems to make interfaces feel alive.
            This is my evolving playground — curated experiments, prototypes, and concepts.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="pointer-events-auto inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              See selected work
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full border border-gray-300 bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors">
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="hidden md:block text-sm text-gray-600/80 bg-white/60 backdrop-blur rounded-2xl p-4 border border-gray-200">
            <p>Interactive 3D scene powered by Spline. Try dragging and clicking around.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
