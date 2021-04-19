import React from "react";
import { Col } from "reactstrap";
import FooterLinks from './menu_footer/menu_footer.js';
import "./footer_center.css";


class FooterCenter extends React.Component {

    render() {
        return (
                <Col md="4" className="text-center">
                  <h5 id="link-menu" className="title">Menu</h5>
                  <FooterLinks/>
                </Col>
        );
    }
}

export default FooterCenter;
