import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Your Name — UI Portfolio</p>
          <a href="#home" className="hover:text-gray-900">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
