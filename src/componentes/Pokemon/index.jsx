import React from 'react'
import './style.css'

function Pokemon({ pokemon }) {
    return (
        <div className="pokemon-conteiner">
            <img src={pokemon.image} alt="Imagem do Pokemon" />
            <div>
                <h2>{pokemon.name}</h2>
                <div className="details">
                    <span className="small-text">ALTURA</span>
                    <span className="big-text">{pokemon.height}</span>
                </div>
                <div className="details">
                    <span className="small-text">PESO</span>
                    <span className="big-text">{pokemon.weight}kg</span>
                </div>
            </div>
        </div>
    )
}
export default Pokemon