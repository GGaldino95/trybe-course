import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);

    this.state = {
      email: '',
      emailIsValid: false,
      passwordIsValid: false,
    };
  }

  validateEmail({ target: { value } }) {
    const emailRegex = (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    this.setState({ email: value, emailIsValid: emailRegex.test(value) });
  }

  validatePassword({ target: { value, minLength } }) {
    this.setState({ passwordIsValid: value.length >= minLength });
  }

  render() {
    const { dispatchEmail } = this.props;
    const { email, emailIsValid, passwordIsValid } = this.state;
    const buttonIsDisabled = !(emailIsValid && passwordIsValid);

    return (
      <main>
        <section>logo</section>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Enter your email here"
          onChange={ this.validateEmail }
          required
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Enter your password here"
          minLength="6"
          onChange={ this.validatePassword }
          required
        />
        <Link to="/carteira">
          <button
            id="login-button"
            type="button"
            onClick={ () => dispatchEmail(email) }
            disabled={ buttonIsDisabled }
          >
            Entrar
          </button>
        </Link>
      </main>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func,
};

Login.defaultProps = {
  dispatchEmail: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
