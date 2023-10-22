import Header from "../header"
import AboutContent from "./about-content"
import Footer from '../footer'

const About = ()=>{
    return (
      <>
        <Header />
        <section className="about_section layout_padding">
          <AboutContent />
        </section>
        <Footer />
      </>  
    )
}

export default About