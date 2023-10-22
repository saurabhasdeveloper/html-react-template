import Header from '../header'
import HeroArea from './hero-area'
import FeatureSection from './feature-section'
import AboutContent from '../about/about-content'
import Professional from './professional'
import ServicesContent from '../services/service-content'
import Testimonials from './testimonials'
import ContactUsContent from '../contact-us/contact-us-content'
import Footer from '../footer'

const Home = ()=>{
    return (
        <div>
            <Header />
            <HeroArea />
            <FeatureSection />
            <section className="about_section layout_padding-bottom">
                <AboutContent />
            </section>
            <Professional />
            <ServicesContent />
            <Testimonials />
            <ContactUsContent />
            <Footer />
        </div>
    )
}

export default Home