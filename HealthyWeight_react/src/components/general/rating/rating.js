import React from "react";
import StarRatings from 'react-star-ratings';

class Rating extends React.Component {
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating
    });
  }
  render() {
    return (
      <StarRatings
        rating= {this.setState.rating || 3.5}
        starHoverColor ="yellow"
        starRatedColor ="#FFFF49"
        changeRating = { this.changeRating.bind(this)}
        numberOfStars = { 5 }
        name ="rating"
        starDimension ="20px"/>
    );
  }
}

export default Rating;
