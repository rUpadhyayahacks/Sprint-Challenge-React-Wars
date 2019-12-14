import React, { useState, useEffect } from 'react';
import StarwarsCard from './StarwarsCard';
import axios from 'axios'

const url = 'https://swapi.co/api/people/'

export default function StarwarsList(props) {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                console.log(response.data)
                const characters = response.data.results;
                setState(characters)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <p>List of Characters</p>
            {state.map(character => {
                return <StarwarsCard
                key={character.results}
                name={character.name}
                height={character.height}
                gender={character.gender}
                />
            })}


        </div>
    )
}

// {state.map(character => {
//     return <StarwarsCard
//     key={character.results}
//     name={character.name}
//     height={character.height}
//     />
// })}