import React from 'react';
import ReactDOM from 'react-dom';
import {  Row, Col , Container } from 'reactstrap';
import TextItems from "./text_items.js";
import "./text_about.css";

class TextAbout extends React.Component{
    constructor(props) {
    super(props);

  }
    render(){
        return (
                <Container className="content mt-5 mb-3 ">
                    <Row>
                        {
                            this.props.text.Text.map((item => {
                                return(
                                    <Col sm="6">
                                        <p className="font-weight-bolder text-left text-dark h2">{item.title} </p>
                                        <p id="text" className={item.cName}>
                                            {item.body}
                                        </p>
                                    </Col>


                                        )
                                    }
                                )
                            )
                        }
                    </Row>
                </Container>
            );
        }
    }

export default TextAbout;
