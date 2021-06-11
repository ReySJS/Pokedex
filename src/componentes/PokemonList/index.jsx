import React, { useState } from 'react'
import Pokemon from '../Pokemon'
import './style.css'

function PokemonList({ pokemons }) {


    const [pokePages, setpokePages] = useState(pokemons.slice(0, 12))

    return (
        <>
            {pokePages.map(pokemon => (
                <Pokemon pokemon={pokemon} key={pokemon.id} />
            ))}
            <div className="pages-conteiner">
                <span className="pages" onClick={() => setpokePages(pokemons.slice(0, 12))}>1</span>
                <span className="pages" onClick={() => setpokePages(pokemons.slice(12, 22))}>2</span>
            </div>
        </>
    )
}
export default PokemonList