import React from 'react';
import ReactPlayer  from 'react-player';
import {Container, Card, CardImg, CardTitle, CardBody, CardText ,Button , Col, Row} from 'reactstrap';
import NewCard from "./new_articales/new.js";
import BestCard from "./best_articales/best_articale.js";


class ArticaleContent extends React.Component{
    render(){
        return (
            <Container>
                <h3 className="display-3 text-center mt-5" id="title">
                  New Articales
                </h3>
                <NewCard/>
                <h3 className="display-3 text-center mt-5" id="title">
                  Best Articales
                </h3>
                <BestCard/>

            </Container>
        );
      };

    }

export default ArticaleContent ;
