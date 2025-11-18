import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-white"
            >
              Kinoqualität. Serien, die bleiben. Ein Studio, das bewegt.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-white/70"
            >
              FS ON ist ein modernes Produktionshaus für Film & Serie. Wir entwickeln, finanzieren und
              realisieren Premium-Originale – von der ersten Idee bis zur internationalen Premiere.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#originals" className="rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition">Unsere Originale</a>
              <a href="#contact" className="rounded-full bg-white/10 ring-1 ring-white/20 text-white px-6 py-3 font-semibold hover:bg-white/20 transition">Mit uns drehen</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-white/80">
              {[
                { label: 'Produktionen', value: '120+' },
                { label: 'Festivals', value: '65' },
                { label: 'Awards', value: '38' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs tracking-widest uppercase text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-tr from-slate-900 to-slate-800">
            <div className="absolute inset-0 opacity-70">
              <Spline scene="https://prod.spline.design/NrzqO2gI3saiO0mA/scene.splinecode" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0" />
          </div>
        </div>
      </div>
    </section>
  )
}
