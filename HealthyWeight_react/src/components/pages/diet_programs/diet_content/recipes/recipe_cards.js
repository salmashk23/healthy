import React , {Component} from 'react';
// import RecipeItem from './recipe_item';
import AddRecipe from './add_recipe.js';
import IndexView from './view_recipe.js';
import './recipe_cards.css'

class RecipesCards extends Component {
	constructor(props) {
		super(props);
		if (!localStorage.getItem('_kallaway_recipes')) {
			localStorage.setItem('_kallaway_recipes', JSON.stringify(this.props.recipeItems));
			this.state = { recipes: this.props.recipeItems };
		} else {
			this.state = { recipes: JSON.parse(localStorage.getItem('_kallaway_recipes')) };
		}

		this.addRecipe = this.addRecipe.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);
		this.modifyRecipe = this.modifyRecipe.bind(this);
		// experiment
	}

	componentWillUnmount() {
		localStorage.setItem('_kallaway_recipes', JSON.stringify(this.state.recipes));
	}

	deleteRecipe(recipeInfo) {
		this.setState({
			recipes: this.state.recipes.filter((recipe) => {
				return recipe.name !== recipeInfo.title;
			})

		});

		localStorage.setItem('_kallaway_recipes', JSON.stringify(this.state.recipes));
	}

	modifyRecipe(recipeInfo, nameBeforeEdit) {
		// var updatedRecipes = this.state.recipes;
		this.setState({
			recipes: this.state.recipes.map((recipe) => {
				if (recipe.name === nameBeforeEdit) {
					return {
						name: recipeInfo.title,
						ingredients: recipeInfo.ingredients
					}
				} else {
					return recipe;
				}
			})
		});
		localStorage.setItem('_kallaway_recipes', JSON.stringify(this.state.recipes));
	}

	addRecipe(recipeInfo) {
		var updatedRecipes = this.state.recipes;
		updatedRecipes.push({
	    name: recipeInfo.title,
	    ingredients: recipeInfo.ingredients,
	  });

		this.setState({
			recipes: updatedRecipes
		})

		localStorage.setItem('_kallaway_recipes', JSON.stringify(this.state.recipes));
		// After it adds a recipe it should also close the form down
	}

  render() {
    console.log(this.props.recipeItems);
    return (
      <div className="recipe">
				<div className="text-center" id="new-container"></div>
				<IndexView
					recipeBank={this.state.recipes}
					modifyRecipe={this.modifyRecipe}
					deleteRecipe={this.deleteRecipe} />
				<AddRecipe addRecipe={this.addRecipe} />
      </div>
    );
  }
}


export default RecipesCards
