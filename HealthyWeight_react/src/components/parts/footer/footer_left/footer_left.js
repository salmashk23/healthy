import React from "react";
import { Col } from "reactstrap";
import "./footer_left.css";


class FooterLeft extends React.Component {
    render() {
        return (
                  <Col md="4" className="text-center">
                    <h1 className="title-web"> Healthy Weight </h1>
                    <h4 id="subtitle"> for a healthier life </h4>
                    <p id="icon">
                    {
                        this.props.footerLeft.Icons.map((item,i) => {
                            return(
                                <li key={i} >
                                    <a href={item.url}>
                                        <i  className={item.cName}></i>
                                    </a>
                                </li>
                                    )
                                }
                            )
                        }
                     </p>
                  </Col>

        );
    }
}

export default FooterLeft;
