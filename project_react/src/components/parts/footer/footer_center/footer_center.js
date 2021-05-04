import React from "react";
import { Col } from "reactstrap";
import FooterLinks from './menu_footer/menu_footer.js';
import "./footer_center.css";


class FooterCenter extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
                <Col md="4" className="text-center">
                  <h5 id="link-menu" className="title">Menu</h5>
                  <FooterLinks footerCenter={this.props.footerCenter}/>
                </Col>
        );
    }
}

export default FooterCenter;
