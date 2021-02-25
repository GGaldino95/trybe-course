import { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.js';
import Button from './Button.js';

class Pokedex extends Component {
    constructor() {
        super();
        this.previousPokemon = this.previousPokemon.bind(this);
        this.nextPokemon = this.nextPokemon.bind(this);
        this.filterPokemon = this.filterPokemon.bind(this);
        this.fetchFilteredPokemons = this.fetchFilteredPokemons.bind(this);

        this.state = {
            pkmnIndex: 0,
            pkmnType: 'all'
        }
    };

    fetchFilteredPokemons() {
        const { pokemonData } = this.props;
        const filteredType = this.state;

        return pokemonData.filter(currentPokemon => filteredType.pkmnType === 'all' ? true : currentPokemon.type === filteredType.pkmnType);
    }

    previousPokemon(filteredPokemons) {
        this.setState(({ pkmnIndex }) =>
            pkmnIndex === 0 ? { pkmnIndex: filteredPokemons.length - 1 } : { pkmnIndex: pkmnIndex - 1 }
        );
    }

    nextPokemon(filteredPokemons) {
        this.setState(({ pkmnIndex }) =>
            pkmnIndex !== filteredPokemons.length - 1 ? { pkmnIndex: pkmnIndex + 1 } : { pkmnIndex: 0 }
        );
    };

    filterPokemon(type) {
        this.setState(() => ({
            pkmnIndex: 0,
            pkmnType: type
        }));
    }

    render() {
        const filteredPokemons = this.fetchFilteredPokemons();
        const pokemonData = filteredPokemons[this.state.pkmnIndex];

        return (
            <main className="pokedex">
                <h1>Pokedex</h1>
                <section className="pokedex-container">
                    <button className="pokemon-button change-pokemon" onClick={() => this.previousPokemon(filteredPokemons)}> {'<'} </button>
                    <Pokemon key={pokemonData.id} pokemon={pokemonData} />
                    <button className="pokemon-button change-pokemon" onClick={() => this.nextPokemon(filteredPokemons)}> {'>'} </button>
                </section>
                <button className="pokemon-button pokemon-type fire" onClick={() => this.filterPokemon('Fire')}> {'Fire'} </button>
                <button className="pokemon-button pokemon-type psychic" onClick={() => this.filterPokemon('Psychic')}> {'Psychic'} </button>
            </main>
        );
    };
}

Pokedex.propTypes = {
    pokemonData: PropTypes.array
};

export default Pokedex;
