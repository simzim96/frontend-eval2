import React from "react";
import styled from "styled-components";
import StarRating from "../StarRating";

const Card = styled.div`
position: relative;
  margin: 16px;
  flex-direction: row;
  flex-shrink: 0;
  flex-basis: 250px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 16px;
  text-align: left;
`;

const Text = styled.p`
  text-align: left;
  margin: 16px;
`

const Rating = styled(StarRating)`
  position: absolute;
  bottom: 0px;
`;

const Grid = ({content}) => {
    return(
  <Wrapper>
      {content.map(item => (
          <Card>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
              <Rating totalStars={5}/>
          </Card>
      ))}
  </Wrapper>)
};

export default Grid;
