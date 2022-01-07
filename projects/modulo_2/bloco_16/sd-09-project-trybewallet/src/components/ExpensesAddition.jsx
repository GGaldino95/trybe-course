import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewExpense, fetchCurrencies } from '../actions';

const NEW_STATE = {
  value: '0',
  description: '',
  currency: '',
  method: '',
  tag: '',
};

class ExpensesAddition extends React.Component {
  constructor() {
    super();
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.createNewExpense = this.createNewExpense.bind(this);
    this.renderCurrenciesDropdown = this.renderCurrenciesDropdown.bind(this);
    this.renderPaymentMethodsDropdown = this.renderPaymentMethodsDropdown.bind(this);
    this.renderTagsDropdown = this.renderTagsDropdown.bind(this);

    this.state = NEW_STATE;
  }

  async componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const { dispatchCurrencies } = this.props;
    await dispatchCurrencies();
  }

  handleInputs({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async createNewExpense() {
    await this.fetchCurrencies();
    const { value, description, currency, method, tag } = this.state;
    const {
      currenciesList,
      expenses,
      dispatchNewExpense,
    } = this.props;

    const newExpense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currenciesList,
    };

    dispatchNewExpense(newExpense);
    this.setState(NEW_STATE);
  }

  renderCurrenciesDropdown() {
    const { currenciesList } = this.props;

    return (
      <select
        data-testid="currency-input"
        name="currency"
        onChange={ this.handleInputs }
        required
      >
        <option style={ { display: 'none' } }> </option>
        { Object.keys(currenciesList)
          .filter((currency) => currency !== 'USDT')
          .map((currency) => (
            <option
              data-testid={ currency }
              key={ currency }
              value={ currency }
            >
              { currency}
            </option>
          ))}
      </select>
    );
  }

  renderPaymentMethodsDropdown() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

    return (
      <select data-testid="method-input" name="method" onChange={ this.handleInputs }>
        <option style={ { display: 'none' } }> </option>
        {paymentMethods.map((method, index) => (
          <option key={ index }>{method}</option>
        ))}
      </select>
    );
  }

  renderTagsDropdown() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <select data-testid="tag-input" name="tag" onChange={ this.handleInputs }>
        <option style={ { display: 'none' } }> </option>
        {tags.map((tag, index) => (
          <option key={ index }>{tag}</option>
        ))}
      </select>
    );
  }

  render() {
    const { value } = this.state;
    return (
      <form>
        Valor:
        <input
          data-testid="value-input"
          type="text"
          name="value"
          value={ value }
          onChange={ this.handleInputs }
        />

        Moeda:
        { this.renderCurrenciesDropdown() }

        Método de pagamento:
        { this.renderPaymentMethodsDropdown() }

        Tag:
        { this.renderTagsDropdown() }

        Descrição:
        <input
          data-testid="description-input"
          type="text"
          name="description"
          onChange={ this.handleInputs }
        />

        <button
          type="button"
          onClick={ this.createNewExpense }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

ExpensesAddition.propTypes = {
  currenciesList: PropTypes.objectOf(String),
  expenses: PropTypes.arrayOf(Object),
  dispatchNewExpense: PropTypes.func,
  dispatchCurrencies: PropTypes.func,
};

ExpensesAddition.defaultProps = {
  currenciesList: { '': '' },
  expenses: [],
  dispatchNewExpense: PropTypes.func,
  dispatchCurrencies: PropTypes.func,
};

const mapStateToProps = ({ wallet }) => ({
  currenciesList: wallet.currenciesList,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchNewExpense: (newExpense) => dispatch(addNewExpense(newExpense)),
  dispatchCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesAddition);
