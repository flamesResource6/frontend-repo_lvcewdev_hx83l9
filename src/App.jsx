import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Originals from './components/Originals'
import Studio from './components/Studio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15),transparent_35%),radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.12),transparent_35%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Originals />
        <Studio />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-white/60">
          <p className="text-sm">© {new Date().getFullYear()} FS ON – Film & Serie</p>
          <div className="text-sm">Impressum · Datenschutz</div>
        </div>
      </footer>
    </div>
  )
}

export default App
