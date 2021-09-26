import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i className="fas fa-star"></i>);
    } else if (i > rating && rating > i - 1) {
      stars.push(<i className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i className="far fa-star"></i>);
    }
  }
  return <>{stars}</>;
};

export default StarRating;
