import { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.js';

class Pokedex extends Component {
    render() {
        return (
            <main className="pokedex">
                <h1>Pokedex</h1>
                <section className="pokedex-container">
                    {this.props.pokemonData.map(currentPokemon => <Pokemon key={currentPokemon.id} pokemon={currentPokemon} />)}
                </section>
            </main>
        );
    }
}

Pokedex.propTypes = {
    pokemonData: PropTypes.array
};

export default Pokedex;