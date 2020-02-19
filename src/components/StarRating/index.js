import React from 'react';
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

const StarRating = () => {
  // Write your code for the star rating component here. You can use the Star functional component but
  // you do not have to.

};

export default StarRating;
