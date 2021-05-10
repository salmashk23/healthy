import React , {Component} from 'react';
import { ListGroupItem } from "reactstrap";

import RecipeDetails from './recipe_details.js';

export default class RecipeListing extends Component {
	constructor() {
		super();
		this.state = {
			detailsHidden: true
		}
	}

	toggleDetails(e) {
		this.setState({
			detailsHidden: !this.state.detailsHidden
		});
	}

	render() {

		if (this.state.detailsHidden) {
			return (
				<ListGroupItem className="recipe-listing">
					<h5 className="detail-toggle" onClick={this.toggleDetails.bind(this)}>{this.props.name}</h5>
				</ListGroupItem>
			);
		} else {
			return (
				<ListGroupItem>
					<h5 className="detail-toggle" onClick={this.toggleDetails.bind(this)}>{this.props.name}</h5>
					<RecipeDetails
						modifyRecipe={this.props.modifyRecipe}
						deleteRecipe={this.props.deleteRecipe}
						ingredients={this.props.ingredients}
						name={this.props.name} />
				</ListGroupItem>
			);
		}
	}
}
