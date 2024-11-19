import Header from './components/header'
import Gallery from './components/gallery'
import homeStyle from './style'
import Hero from './components/hero'
import About from './components/about'
import Stat from './components/stat/stat'
import Services from './components/service/service'
import Appointment from './components/appointment'
import Department from './components/department/department'
import Doctor from './components/doctor/doctor'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

export default function HomePage() {
  const {value,toggle} = useBoolean(true)
  return (
    <div
       css={homeStyle.container}
    >
      <Header />
      <Hero />
      <About />
      <Stat />
      <Services />
      <Appointment />
      <Department />
      <Doctor />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
