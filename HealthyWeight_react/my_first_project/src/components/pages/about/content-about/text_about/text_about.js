import React from 'react';
import ReactDOM from 'react-dom';
import {  Row, Col , Container } from 'reactstrap';
import "./text_about.css"

class TextAbout extends React.Component{
    render(){
        return (
                <Container className="content mt-5 mb-3 ">
                    <Row>
                        <Col sm="6">
                            <p className="font-weight-bolder text-left text-dark h2"> Why Is a Healthy Weight Important? </p>
                            <p id="text" className="p-4 m-4 text-body text-left"> Reaching and maintaining a healthy weight is important for overall
                                health and can help you prevent and control many diseases and conditions.
                                If you are overweight or obese, you are at higher risk of developing
                                serious health problems, including heart disease, high blood pressure,
                                type 2 diabetes, gallstones, breathing problems, and certain cancers.
                                That is why maintaining a healthy weight is so important:
                                It helps you lower your risk for developing these problems,
                                helps you feel good about yourself, and gives you more energy to enjoy life.
                            </p>
                        </Col>
                        <Col sm="6">
                            <p className="font-weight-bolder h2 text-left text-dark mb-5"> Who Is The "Healthy Weight" For? </p>
                            <p id="text" className="p-4 m-4 text-body text-left pt-5"> "Healthy Weight" was developed to help all people everywhere lead
                                a healthier life by changing behavior, achieving and maintaining
                                a healthy weight, no matter what your weight,
                                but what matters is how much you are willing to achieve and
                                maintain a healthy weight.
                            </p>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }

export default TextAbout;
