import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Input, Form , Button } from 'reactstrap';

export default class NewRecipeForm extends Component {
	constructor() {
		super();
		this.state = {
			inputText: '',
			textareaText: '',
			originalName: ''
		}

		this.recipeToEdit;

		this.handleSubmit = this.handleSubmit.bind(this);
		this.isExistingRecipe = this.isExistingRecipe.bind(this);
		this.buildStringFromIngredients = this.buildStringFromIngredients.bind(this);
	}

	closeNewRecipeForm() {
		ReactDOM.unmountComponentAtNode(document.getElementById('new-container'));
	}

	componentWillMount() {
		this.setState({
			originalName: this.props.name
		});
		// if (this.props.recipeInfo) {
		if (this.props.ingredients) {
			this.setState({
				inputText: this.props.name,
				textareaText: this.buildStringFromIngredients(this.props.ingredients)
			});

			this.recipeToEdit = {
				name: this.props.name,
				ingredients: this.buildStringFromIngredients(this.props.ingredients)
			}
		}


	}

	handleSubmit(event) {
		event.preventDefault(); // making sure it doesn't submit right away
		// Change local storage to the file that was submitted.
		var newRecipeDetails = {
			title: this.state.inputText.trim() ? this.state.inputText : 'Untitled',
			ingredients: this.getIngredientsFromString(this.state.textareaText),
		};
		// use a callback function?
		if (this.recipeToEdit) {
			this.props.modifyRecipe(newRecipeDetails, this.state.originalName); // have to give it its original name
		} else {
			this.props.addRecipe(newRecipeDetails);
		}

		//add a check - if there is no title or no ingredients, don't add them to the table.
		// add submission on Enter?
		this.closeNewRecipeForm();
	}

	isExistingRecipe() {
		return this.recipeToEdit;
	}

	getIngredientsFromString(str) {
		return str.split(",").map(ingredient => ingredient.trim());
	}

	buildStringFromIngredients(arr) {
		return arr.join(', ');
	}

	render() {
		return (
			<Form className="new-recipe-form" onSubmit={this.handleSubmit}>
				<div className="new-recipe-header">
					<h3 className="text-center">Add a Recipe</h3>
				</div>
				<hr />
				<div className="new-recipe-body">
					<div>
						<h4>Recipe</h4>
						<Input type="text"
							placeholder="Recipe Name"
							value={this.state.inputText }
							// value={this.state.inputText || this.isExistingRecipe().name}
							onChange={(event) => this.setState({ inputText: event.target.value })}
						/>
					</div>
					<div>
						<h4>Ingredients</h4>
						<Input
                            type="textarea"
							placeholder="Enter ingredients, Separated, By commas"
							value={this.state.textareaText }
							// value={this.state.textareaText || this.isExistingRecipe().ingredients }
							onChange={(event) => this.setState({ textareaText: event.target.value })}/>
					</div>
				</div>
					<div className="new-recipe-footer">
						<Button type="submit" className=" m-2 p-3">Add Recipe</Button>
						<Button className=" m-2 p-3" onClick={this.closeNewRecipeForm}>Close</Button>
					</div>
				</Form>
			)
		}
	}
