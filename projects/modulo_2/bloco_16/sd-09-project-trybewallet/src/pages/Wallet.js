import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesTable from '../components/ExpensesTable';
import ExpensesAddition from '../components/ExpensesAddition';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.updateTotalExpensesValue = this.updateTotalExpensesValue.bind(this);
  }

  updateTotalExpensesValue() {
    const { expenses } = this.props;
    let totalExpensesValue = 0;
    expenses.forEach(({ value, exchangeRates, currency }) => {
      totalExpensesValue += value * exchangeRates[currency].ask;
    });
    return totalExpensesValue;
  }

  render() {
    const { email } = this.props;

    return (
      <main>
        <header>
          <span data-testid="email-field">
            {`Email: ${email}`}
          </span>
          <span data-testid="total-field">
            Despesa total:
            {this.updateTotalExpensesValue().toFixed(2)}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <ExpensesAddition />
        <ExpensesTable />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(Object),
};

Wallet.defaultProps = {
  email: '',
  expenses: [{}],
};

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => (
  { email, expenses });

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
