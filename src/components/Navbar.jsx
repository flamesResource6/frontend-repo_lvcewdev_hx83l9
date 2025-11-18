import { Menu, Film, Star, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group inline-flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-500 opacity-60 blur group-hover:opacity-90 transition" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-white/10">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="leading-tight">
                <span className="block text-xs tracking-widest text-white/60">FILM STUDIO</span>
                <span className="block text-lg font-semibold text-white">FS ON</span>
              </div>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Über uns', href: '#about' },
                { label: 'Originale', href: '#originals' },
                { label: 'Studio', href: '#studio' },
                { label: 'Kontakt', href: '#contact' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow/50 shadow-white/10 hover:shadow-white/20 transition"
              >
                <Star className="h-4 w-4" />
                Projekt anfragen
              </a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
