import React, { useEffect, useState } from 'react';
import pokemonLogo from '../img/pokemon.png';
import axios from 'axios';

export default function Pokemon(props) {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon`)
            .then((response) => {
                console.log(response.data.results)
                setPokemons(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const updatePokemonData = async (name) => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

                return response.data;
            } catch (error) {
                console.error(`Error fetching data for ${name}:`, error);
                return null;
            }
        };

        const fetchPokemonData = async () => {
            const updatedPokemons = await Promise.all(
                pokemons.map(async (pokemon) => {
                    const data = await updatePokemonData(pokemon.name);
                    return { ...pokemon, data };
                })
            );
            setPokemons(updatedPokemons);
        };

        fetchPokemonData();
    }, [pokemons]);

    const sendInformation = (pokemon) => {
        setSelectedPokemon(pokemon);
        props.setSelectedPokemon(pokemon);

    }

    return (
        <>
            <img src={pokemonLogo} alt="" className="pokemon-img" />

            <div className="wrapper-pokemons">
                <div className="container-table">
                    {pokemons.map((pokemon, index) => (
                        <div className="item" key={pokemon.name} onClick={() => sendInformation(pokemon)}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                                    index + 1
                                }.svg`}
                                alt=""
                            />
                            <div className="information">
                                <p>Name: {pokemon.name}</p>
                                {pokemon.data && (
                                    <>
                                        <p>Raily: {pokemon.data.stats[0].base_stat}</p>
                                        <p>Card №: {pokemon.data.id}</p>
                                        {pokemon.data.abilities.map((ability, index) => (
                                            <p key={index}>Power: {ability.ability.name}</p>
                                        ))}
                                        <p>Power: {pokemon.data.stats[1].base_stat}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
