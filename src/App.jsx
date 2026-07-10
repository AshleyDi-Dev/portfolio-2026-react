import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Analytics from './components/Analytics.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import FireWatchBC from './pages/casestudies/FireWatchBC.jsx'
import LaNotte from './pages/casestudies/LaNotte.jsx'
import Forme from './pages/casestudies/Forme.jsx'
import RealStreet from './pages/casestudies/RealStreet.jsx'
import VelvetRoom from './pages/casestudies/VelvetRoom.jsx'
import Wayfair from './pages/casestudies/Wayfair.jsx'
import KnowledgeDatabase from './pages/casestudies/KnowledgeDatabase.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Routes>
        {/* Standard pages share the Nav/Footer layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Case studies have their own chrome (back-link nav + TOC) */}
        <Route path="/projects/casestudy-firewatchbc" element={<FireWatchBC />} />
        <Route path="/projects/casestudy-lanotte" element={<LaNotte />} />
        <Route path="/projects/casestudy-forme" element={<Forme />} />
        <Route path="/projects/casestudy-realstreet" element={<RealStreet />} />
        <Route path="/projects/casestudy-velvetroom" element={<VelvetRoom />} />
        <Route path="/projects/casestudy-wayfair" element={<Wayfair />} />
        <Route path="/projects/casestudy-knowledgedatabase" element={<KnowledgeDatabase />} />
      </Routes>
    </>
  )
}
