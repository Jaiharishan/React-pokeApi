import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from 'bootstrap';
import { Button } from 'bootstrap';

const typeColors = {
    bug: '#729f3f',
    dragon: '#53a4cf',
    fairy: '#fdb9e9',
    fire: '#fd7d24',
    ghost: '#7b62a3',
    ground: '#f7de3f',
    normal: '#a4acaf',
    pyschic: '#f366b9',
    steel: '#9eb7b',
    dark: '#707070',
    electric: '#eed535',
    fighting: '#d56723',
    flying: '#3dc7ef',
    grass: '#9bcc50',
    ice: '#51c4e7',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4'
}


const Pokemon = ({key, pokemon}) => {

    const [ourPokemon, setOurPokemon] = useState('');

    const [showPokemon, setShowPokemon] = useState(false);

    const getPokemon = () => {
        axios.get(pokemon.url).then(res => {
            console.log(res.data);
            setOurPokemon(res.data);
        })
    }


    useEffect(() => {
        getPokemon();
    }, [])


    return (
        <>
            <div className="pokemon" onDoubleClick = {() => setShowPokemon(!showPokemon)}>


                {ourPokemon && <img src={ourPokemon.sprites.front_default} alt="pokemonImg" />}

                <div className="name">{ourPokemon.name}</div>

                

                <div className='types'>
                    {ourPokemon && ourPokemon.types.map(t => (

                    
                        <div key={t.type.name} className="type" style={{background : typeColors[t.type.name]}}>{t.type.name}</div>
                    ))}
                </div>
            </div>

            
        </>
    )
}

export default Pokemon
