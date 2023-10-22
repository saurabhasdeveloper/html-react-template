const FooterContactInfo = ()=>{
    return (
        <div className="container">
          <h4>
            Get In Touch
          </h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item ">
                        <div className="img-box ">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item ">
                        <div className="img-box ">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <p>
                          +02 1234567890
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item ">
                        <div className="img-box">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <p>
                          demo@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default FooterContactInfo