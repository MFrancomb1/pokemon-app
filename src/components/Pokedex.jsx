import {useState} from "react";
import axios from "axios";

const Lookup = ({onSubmit}) => {
    const [pokemonNumber, setPokemonNumber] = useState('');

    const handleInputChange = (event) => {
        setPokemonNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(pokemonNumber);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={pokemonNumber} onChange={handleInputChange} />
            <button type="submit">Lookup</button>
        </form>
    );
};

const PokemonData = ({ pokemon }) => {
    if(!pokemon) {
        return null;
    }

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprite} />
        </div>
    );
};

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState(null);


    const fetchPokemonData = async (dexNumber) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${dexNumber}`);
            const {name, sprites} = response.data;
            const sprite = sprites.front_default;
            setPokemonData({name, sprite});
        } catch (error) {
            console.error('Error fetching data:', error);
            setPokemonData(null);
        }
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <Lookup onSubmit={fetchPokemonData} />
            <PokemonData pokemon={pokemonData} />
        </div>
    );
}

export default Pokedex
