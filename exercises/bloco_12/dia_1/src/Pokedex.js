import { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.js';

class Pokedex extends Component {
    constructor() {
        super();
        this.handleButton = this.handleButton.bind(this);

        this.state = {
            pkmnIndex: 0
        }
    };

    handleButton() {
        this.setState((previousState, props) =>
            previousState.pkmnIndex !== props.pokemonData.length - 1 ? { pkmnIndex: previousState.pkmnIndex += 1 } : { pkmnIndex: 0 }
        );
    };

    render() {
        const { pokemonData } = this.props;
        return (
            <main className="pokedex">
                <h1>Pokedex</h1>
                <section className="pokedex-container">
                    <Pokemon key={pokemonData.id} pokemon={pokemonData[this.state.pkmnIndex]} />
                </section>
                <button className="pokemon-button next-pokemon" onClick={this.handleButton}>Next Pokemon</button>
            </main>
        );
    };
}

Pokedex.propTypes = {
    pokemonData: PropTypes.array
};

export default Pokedex;
