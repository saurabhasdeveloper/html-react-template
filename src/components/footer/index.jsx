import FooterContactInfo from "./footer-contact-info"
import FooterSocialIcon from "./footer-social-icons"
import FooterCopyright from "./footer-copyright"

const Footer = ()=>{
  return (
    <>
      <section className="info_section ">
        <FooterContactInfo />
        <FooterSocialIcon />
      </section>
      <FooterCopyright />
    </>
  )
}

export default Footer