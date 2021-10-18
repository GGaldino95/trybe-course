import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const { loading, character, error } = this.props;
  
    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      );
    }
  
    if (error) {
      return <div>{error}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
  
    return <div>Type a character name and click to search!</div>;
  }
};

const mapStateToProps = ({
  characterReducer: {
    loading,
    character,
    error,
  }
}) => ({
  loading, character, error
});

CharacterInfo.propTypes = {
  loading: propTypes.bool.isRequired,
  character: propTypes.arrayOf(propTypes.object),
  error: propTypes.string,
};

CharacterInfo.defaultProps = {
  character: null,
  error: null,
};

export default connect(mapStateToProps)(CharacterInfo);
