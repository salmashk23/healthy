import React from "react";
import { Col } from "reactstrap";
import "./footer_right.css";


class FooterRight extends React.Component {
    render() {
        return (
                <Col md="4" className="text-center">
                  <h5 className="title" id="contact"> <a href="/contact_us"> Contact Us </a> </h5>
                  <p className="mb-0">
                      <i className="fa fa-phone mr-3"></i>
                      052-666-5000
                  </p>
                  <p>
                      <i className="fa fa-envelope-o mr-3"></i>
                      HealthyWeight@gmail.com
                  </p>
                </Col>
        );
    }
}

export default FooterRight;
