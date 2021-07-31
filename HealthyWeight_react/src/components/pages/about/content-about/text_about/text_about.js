import React from 'react';
import {  Row, Col , Container } from 'reactstrap';
import "./text_about.css";

class TextAbout extends React.Component{
    render(){
        return (
            <Container className="content mt-5 mb-3 ">
                <Row>
                    {this.props.text.Text.map((item,i) => {
                        return(
                            <Col key={i} sm="6">
                                <p className="font-weight-bolder text-left text-dark h2">
                                    {item.title} 
                                </p>
                                <p id="text" className={item.cName}>
                                    {item.body}
                                </p>
                            </Col>
                            )
                         }
                    )}
                </Row>
            </Container>
         );
    }
}

export default TextAbout;
