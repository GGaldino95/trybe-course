import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class PlayerHeaderInfo extends React.Component {
  render() {
    const { name, email, score } = this.props;
    const hash = md5(email.toLowerCase()).toString();
    const API_URL = `https://www.gravatar.com/avatar/${hash}?s=100`;

    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ API_URL }
          alt={ `${name} avatar` }
        />
        <span data-testid="header-player-name">{ name }</span>
        <span data-testid="header-score">{ score }</span>
      </header>
    );
  }
}

PlayerHeaderInfo.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  score: PropTypes.number,
};

PlayerHeaderInfo.defaultProps = {
  name: '',
  email: '',
  score: 0,
};

const mapStateToProps = ({ player }) => ({
  name: player.name,
  email: player.email,
  score: player.score,
});

export default connect(mapStateToProps)(PlayerHeaderInfo);
