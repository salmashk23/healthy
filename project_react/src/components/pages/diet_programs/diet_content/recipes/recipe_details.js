import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { ListGroup ,ListGroupItem, Button } from "reactstrap";
import NewRecipeForm from './recipe_new.js';

export default class RecipeDetails extends Component {
	constructor(props) {
		super(props);

		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleEdit() {
			// also needs a name
			ReactDOM.render(<NewRecipeForm
				modifyRecipe={this.props.modifyRecipe}
				ingredients={this.props.ingredients}
				name={this.props.name} />,
				document.getElementById('new-container'));
	}

	handleDelete(event) {
		var recipeDetails = {
			title: this.props.name,
			ingredients: this.props.ingredients // might not be needed
		}
		this.props.deleteRecipe(recipeDetails);
	}

	render() {
		return (
			<div className="recipe-details">
				<h3>Ingredients</h3>
				<ListGroup>
					{this.props.ingredients.map((ingredient) => {
						return <ListGroupItem className="recipe-list" key={ingredient}>{ingredient}</ListGroupItem>
					})}
				</ListGroup>
				<div className='details-footer'>
					<Button className="btn-warning m-2" onClick={this.handleDelete}>Delete</Button>
					<Button className="m-2 " onClick={this.handleEdit}>Edit</Button>
				</div>
			</div>
		)
	}
}
