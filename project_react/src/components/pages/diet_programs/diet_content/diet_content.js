import React from 'react';
import {Container} from 'reactstrap';
import DietCard from "./diet_card/diet_card.js";
import  RecipesCards from "./recipes/recipe_cards.js";
import "./diet_content.css";

class DietContent extends React.Component{
    render(){
        return(
            <Container>
                <h3 className="display-3 text-center mt-5" id="title">
                    Diet Programs
                </h3>
                <DietCard diet={this.props.content.Diet}/>
                <h3 className="display-3 text-center mt-5" id="title">
                    Recipes
                </h3>
                <RecipesCards recipeItems={this.props.content.Recipe} />
            </Container>
            );
        }
    }
export default DietContent;
