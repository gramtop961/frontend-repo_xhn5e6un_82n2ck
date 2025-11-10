import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 shadow-sm' : 'bg-transparent'} `}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="relative grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 text-white">
            <Sparkles size={18} />
          </span>
          <span className="text-gray-900">Your Name</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {it.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
            Let’s collaborate
          </a>
        </div>

        <button aria-label="Open menu" className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden absolute inset-x-3 top-2 rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-semibold">Menu</span>
            <button aria-label="Close menu" className="p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
          <div className="px-4 pb-4 grid gap-2">
            {items.map((it) => (
              <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 hover:bg-gray-50">
                {it.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 bg-gray-900 text-white text-center">
              Let’s collaborate
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
