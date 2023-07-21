
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link, Outlet } from 'react-router-dom'

interface Pokemon {
    name: string;
    height: number;
    weight: number;
    id: number;
    img: string;
    types: string[];
  }

// <Link to="/{pokemon.name}">Home</Link>>

const HomePage: React.FC = () => {

    const [pokemonList, setPokemonList] = useState <Pokemon[]> ([]);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
        );

        const results = response.data.results;

        const fetchedPokemonList: Pokemon[] = await Promise.all(
          results.map(async (pokemon: { url: string }) => {
            const pokemonDataResponse = await axios.get(pokemon.url);

            console.log(pokemonDataResponse);
            return {
              name: pokemonDataResponse.data.name,
              height: pokemonDataResponse.data.height,
              id: pokemonDataResponse.data.id,
              img: pokemonDataResponse.data.sprites.other.dream_world.front_default,
              types: pokemonDataResponse.data.types.map(
                ( type: { type: { name: string } } ) => type.type.name
              ),

            };
          })
        );
        setPokemonList(fetchedPokemonList);
      } catch (error) {
        console.error("Error fetching Pokemon Data:", error);
      }
    }
    fetchPokemonData();
  }, []);

    return (
        <>
        <section className='section'>
            <div className='row'>
            { pokemonList.map((pokemon) =>
                <div className='column'>
                    {/* <Link to="{pokemon.name}"> */}
                        <div className='card'>
                            <div className='pokemon-details'>
                            <h3>{ pokemon.name } </h3>
                            <h4>{ pokemon.id } </h4>
                            </div>
                            <div>
                            <img className='pokemon-img' src={ pokemon.img } alt={ pokemon.name }/>
                            </div>
                            <div>
                                {pokemon.types.map((type) => (
                                <div>{ type }</div>
                                ))}
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
            )}
            </div>
      </section>
        </>
    )

}

export default HomePage;