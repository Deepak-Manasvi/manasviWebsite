import React from 'react'
import Footer from './Footer'
import ContactForm from './ContactForm'
import ProductCarousel from './ProductCarousel'
import ServicesPage from './ServicesPage'
import OurTeam from './OurTeam'
import Testimonial from './Testimonial'
import HeroSection from './HeroSection'
import FrontPage from './FrontPage'
import Marquee from './Marquee'
import AboutUsHome from './AboutUsHome';
import Slider from './Slider'
import ContactR from './ContactR'
// import HeroSeHome from './HeroSeHome'
import HeroSecond from './HeroSecond'
import HereThree from './HereThree'
import TeamSection from './TeamSection'
import Banner from './Banner'

function Home() {
  return (
    <div>
      <FrontPage />
      <ServicesPage />
      <AboutUsHome />
      <Marquee />
      <ProductCarousel />
      <OurTeam />
      <Testimonial/>
      {/* <HeroSection/> */}
      {/* <ContactForm /> */}
      <Banner/>
      {/* <HeroSecond/> */}
      {/* <HereThree/> */}
      {/* <Slider/> */}
      {/* <TeamSection/> */}
      <ContactR/>
    </div>
  )
}

export default Home
