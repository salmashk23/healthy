import React from 'react';
import ReactPlayer  from 'react-player';
import {Container, Card, CardImg, CardTitle, CardBody, CardText ,Button , Col, Row} from 'reactstrap';
import NewCard from "./new_articles/new.js";
import BestCard from "./best_articles/best_article.js";


class ArticleContent extends React.Component{
    render(){
        return (
            <Container>
                <h3 className="display-3 text-center mt-5" id="title">
                  New Articles
                </h3>
                <NewCard/>
                <h3 className="display-3 text-center mt-5" id="title">
                  Best Articles
                </h3>
                <BestCard/>

            </Container>
        );
      };

    }

export default ArticleContent ;
