import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'reactstrap';
import DietCard from "./diet_card/diet_card.js";
import RecipeCard from "./recipes/recipe.js";
import "./diet_content.css";

class DietContent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container>
                <h3 className="display-3 text-center mt-5" id="title">
                  Diet Programs
                </h3>
                <DietCard diet={this.props.content}/>
                <h3 className="display-3 text-center mt-5" id="title">
                      Recipes
                </h3>
                <RecipeCard recipe={this.props.content}/>
            </Container>
            );
        }
    }
export default DietContent;
