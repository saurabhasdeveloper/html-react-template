import GoogleMap from "../../google-map"

const ContactUsContent = ()=>{
    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Contact Us
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form action="">
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" className="message-box" placeholder="Message" />
                            </div>
                            <div className="d-flex ">
                                <button>
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="map_container">
                            <GoogleMap />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsContent