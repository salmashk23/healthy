import React , {Component} from 'react';
import { ListGroup , Row , Col} from "reactstrap";
import RecipeListing from './recipe_listing.js';
import Rating from "../../../../general/rating/rating.js";


export default class IndexView extends Component {

	render() {
		if (this.props.recipeBank === '') {
			return <div>Loading...</div>
		} else {
			return (
				<div className="IndexView">
					<ListGroup>
                        <Row>
						{this.props.recipeBank.map((item) =>
							// <li>{item.name}</li>
                            <Col>
                            <img className="recipe-img m-4" src= {process.env.PUBLIC_URL + item.image} alt="recipe cards"/>
                            <Rating/>
                            <RecipeListing
								modifyRecipe={this.props.modifyRecipe}
								deleteRecipe={this.props.deleteRecipe}
								key={item.name}
								name={item.name}
								ingredients={item.ingredients} />
                            </Col>
						)}
                        </Row>
					</ListGroup>
				</div>
			)
		}

	}
}
