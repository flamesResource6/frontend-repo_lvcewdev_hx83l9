import { motion } from 'framer-motion'
import { Camera, Users, MonitorPlay, Rocket } from 'lucide-react'

export default function Studio() {
  const features = [
    { icon: Camera, title: 'Regie & Kamera', desc: 'High-End-Kamerateams, modernste Technik und präzises Lichtdesign.' },
    { icon: Users, title: 'Writers Room', desc: 'Showrunner-geführt. Starke Figuren, starke Welten, starke Dialoge.' },
    { icon: MonitorPlay, title: 'Postproduktion', desc: '4K/8K, Color Grading, VFX, Sounddesign – alles Inhouse.' },
    { icon: Rocket, title: 'Distribution', desc: 'Globale Vermarktung und Partnernetzwerk für internationale Releases.' },
  ]
  return (
    <section id="studio" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Studio & Leistungen</h2>
          <p className="mt-2 text-white/70">Von der Idee zur Premiere – Full-Service-Produktion aus einer Hand.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
