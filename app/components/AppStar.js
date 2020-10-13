import React, { useState } from 'react';
import StarRating from 'react-native-star-rating';
import colors from '../utils/colors';

export default function AppStar({initialStarRating}) {
    const [starCounting, setStarCounting] = useState(initialStarRating);

    function onStarRatingPress(rating) {
        setStarCounting(rating);
    }

    return (
        <StarRating
        disabled={false}
        maxStars={5}
        rating={starCounting}
        selectedStar={(rating) => onStarRatingPress(rating)}
        fullStarColor={colors.khaki}
      />
    )
}

