import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'reactstrap';
import DietCard from "./diet_card/diet_card.js";
import RecipeCard from "./recipes/recipe.js";
import "./diet_content.css";

class DietContent extends React.Component{
    render(){
        return(
            <Container>
                <h3 className="display-3 text-center mt-5" id="title">
                  Diet Programs
                </h3>
                <DietCard/>
                <h3 className="display-3 text-center mt-5" id="title">
                      Recipes
                </h3>
                <RecipeCard/>
            </Container>
            );
        }
    }
export default DietContent;
