import { motion } from 'framer-motion'
import { Film, Clapperboard, Award } from 'lucide-react'

const items = [
  {
    title: 'NEON NIGHTS',
    desc: 'Sci-Fi Thriller Serie – Staffel 3 in Produktion',
    tag: 'Serie',
  },
  {
    title: 'SILENT WINDS',
    desc: 'Arthouse Drama – Weltpremiere in Venedig',
    tag: 'Film',
  },
  {
    title: 'ECHO CITY',
    desc: 'Mystery Miniserie – internationale Koproduktion',
    tag: 'Miniserie',
  },
]

export default function Originals() {
  return (
    <section id="originals" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">FS ON Originals</h2>
            <p className="mt-2 text-white/70">Ausgewählte Highlights – made by FS ON</p>
          </div>
          <a href="#" className="text-sm text-white/70 hover:text-white transition">Alle Projekte →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/0 via-white/0 to-sky-500/0 group-hover:from-fuchsia-500/10 group-hover:to-sky-500/10 transition" />
              <div className="flex items-center gap-3 text-white/80">
                <Clapperboard className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest">{item.tag}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold">Teaser ansehen</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80">
          {[
            { icon: Award, label: 'International Emmy' },
            { icon: Award, label: 'Berlinale' },
            { icon: Award, label: 'Canneseries' },
            { icon: Award, label: 'Deutscher Filmpreis' },
          ].map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 p-4"
            >
              <a.icon className="h-5 w-5 text-white" />
              <span>{a.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
