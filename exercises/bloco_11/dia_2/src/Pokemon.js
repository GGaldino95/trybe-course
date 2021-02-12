import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const { pokemon } = this.props;
        const averageWeight = pokemon.averageWeight;

        return (
            <section className="pokemon-card">
                <div className="pokemon-info">
                    <p>{pokemon.name}</p>
                    <p>{pokemon.type}</p>
                    <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                <img src={pokemon.image} alt={pokemon.name}></img>
            </section>
        );
    }
}

Pokemon.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string
};

export default Pokemon;