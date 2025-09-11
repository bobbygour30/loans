import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import Eligibility from './pages/Eligibility'
import Loans from './pages/Loans'
import Platform from './pages/Platform'
import Support from './pages/Support'
import Solutions from './pages/Solutions'
import WhyFyntegra from './pages/WhyFyntegra'
import EmiCalculator from './pages/EmiCalculator'
import Contact from './pages/Contact'
import ApplyNow from './pages/ApplyNow'
import PartnerWithUs from './pages/PartnerWithUs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/support" element={<Support />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/why-fyntegra" element={<WhyFyntegra />} />
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App