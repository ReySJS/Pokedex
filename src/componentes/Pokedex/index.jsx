import React, { useState, useEffect } from 'react'
import './style.css'
import PokemonList from '../PokemonList'
import logo from '../../assets/images/logo.svg'
import loadingImage from '../../assets/images/loading.png'

function Pokedex() {

    let counterPage = 0;
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/srsantosdev/pokedex-fakeapi/pokedex")
            .then(response => response.json())
            .then(data => setPokemonList(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <img src={loadingImage} alt="" />
                <span>Carregando...</span>
            </div>)
    }

    return (
        <>
            <header>
                <img src={logo} alt="Logo" />
            </header>
            <main>
                <PokemonList pokemons={pokemonList} />
            </main>
        </>
    )
}
export default Pokedex