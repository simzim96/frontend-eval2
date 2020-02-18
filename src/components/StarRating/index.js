import React, {useState} from 'react';
import styled from 'styled-components';
import { ReactComponent as StarIcon }from '../../assets/star.svg';

const StyledStar = styled(StarIcon)`
  cursor: pointer;
  width: 2em;
  height: 2em;
  fill: ${props => props.selected ? "green" : "gray"};
`;

const Star = ({ selected = false, onClick }) => {
  return(
      <StyledStar selected={selected} onClick={onClick}/>
  )
};

const StarRating = ({ totalStars }) => {
    const [starsSelected, selectStar] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={i < starsSelected}
                    onClick={() => selectStar(i + 1)}
                />
            ))}
            <p>
                {starsSelected} of {totalStars} stars
            </p>
        </div>
    );
};

export default StarRating;
