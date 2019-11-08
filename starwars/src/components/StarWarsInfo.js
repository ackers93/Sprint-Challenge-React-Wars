import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarWarsCard from "./StarWarsCard"
import styled from "styled-components";

export default function StarWarsInfo() {
    const [cards, setCard] = useState([]);

    useEffect(() => {
        axios
            .get("https://lambda-swapi.herokuapp.com/api/people/")
            .then(response => {
                console.log(response.data.results);
                setCard(response.data.results)

            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, []);


    const Cards = styled.div`
    border:2px solid black;
    background-color: red;
    width: 30%;
    display:flex;
    flex-direction: row;
    

`
    return (
        <div className="character">
            {cards.map(card => {
                return (
                    <Cards>
                        <StarWarsCard
                            key={card.created}
                            name={card.name}
                            gender={card.gender}
                            hair_color={card.hair_color}
                            homeworld={card.homeworld}
                            height={card.height}
                        />
                    </Cards>
                )
            })}
        </div>
    );
}

