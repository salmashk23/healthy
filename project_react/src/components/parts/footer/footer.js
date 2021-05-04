import React from "react";
import { Col ,  Container, Row, } from "reactstrap";

import FooterLeft from "./footer_left/footer_left.js";
import FooterRight from "./footer_right/footer_right.js";
import FooterCenter from "./footer_center/footer_center.js";
import FooterBottom from "./footer_bottom/footer_bottom.js";
import "./footer.css";

class Footer extends React.Component {
    constructor(props) {
    super(props);
  }
  render(){
      console.log(this.props.footerLeft)
        return (
            <footer id="footer" className="font-small pt-4 mt-4">
                  <Container fluid className="text-center text-md-left">
                        <Row>
                              <FooterLeft footerLeft={this.props.footerData}/>
                              <FooterCenter footerCenter={this.props.footerData}/>
                              <FooterRight/>
                        </Row>
                  </Container>
                  <FooterBottom/>
             </footer>
        );
    }
}

export default Footer;
