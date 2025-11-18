import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(125,211,252,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
          <h2 className="text-3xl font-bold text-white">Projekt anfragen</h2>
          <p className="mt-2 text-white/70">Erzählen Sie uns von Ihrem Vorhaben. Wir melden uns innerhalb von 24 Stunden.</p>

          <form className="mt-8 grid grid-cols-1 gap-4">
            <input placeholder="Ihr Name" className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <input placeholder="E-Mail" type="email" className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <input placeholder="Thema" className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <textarea placeholder="Kurzbeschreibung" rows={4} className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition"
              onClick={() => alert('Danke! Wir melden uns in Kürze.')}
            >
              Nachricht senden
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}
