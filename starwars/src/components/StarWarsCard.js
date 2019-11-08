import React from 'react';
import styled from "styled-components";

const Card = styled.div`
border:2px solid black;
background-color: lightgrey;
width:100%;
margin: 2%;
`

const CardTitle = styled.div`
font-size: 2em;
color: yellow;
background-color: black
overflow: hidden;`

const CardSubtitle = styled.div`
margin-bottom: 10px;
`

const CardText = styled.div`
margin-bottom: 10px;
`


const StarWarsCard = (props) => {
    return (
        <Card>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>Gender: {props.gender}</CardSubtitle>
            <CardText>Hair Color: {props.hair_color}</CardText>
            <CardText>Height:{props.height}</CardText>
        </Card>
    );
};

export default StarWarsCard;



