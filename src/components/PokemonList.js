import React from 'react';
import Pokemon from './Pokemon.js'

const PokemonList = ({pokemons}) => {

    return (
        <div className="grid-container">
            {pokemons.map((pokemon, index) => (
                
                <Pokemon key= {index} pokemon={pokemon} />
            ))}
            
        </div>
    )
}

export default PokemonList
