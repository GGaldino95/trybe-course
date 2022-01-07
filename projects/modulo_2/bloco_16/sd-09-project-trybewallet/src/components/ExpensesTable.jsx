import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class ExpensesTable extends React.Component {
  constructor() {
    super();

    this.renderExpensesOnTable = this.renderExpensesOnTable.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense(currentExpenseId) {
    const { expenses, dispatchDeletedExpense } = this.props;

    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== currentExpenseId,
    );

    dispatchDeletedExpense(updatedExpenses);
  }

  renderExpensesOnTable() {
    const { expenses } = this.props;

    return expenses.map((currentExpense) => {
      const rates = currentExpense.exchangeRates[currentExpense.currency];
      return (
        <tr key={ currentExpense.id }>
          <td>{currentExpense.description}</td>
          <td>{currentExpense.tag}</td>
          <td>{currentExpense.method}</td>
          <td>{currentExpense.value}</td>
          <td>{rates.name}</td>
          <td>{parseFloat(rates.ask).toFixed(2)}</td>
          <td>{(rates.ask * currentExpense.value).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button
              data-testid="delete-btn"
              type="button"
              onClick={ () => this.deleteExpense(currentExpense.id) }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { this.renderExpensesOnTable() }
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(Object),
  dispatchDeletedExpense: PropTypes.func,
};

ExpensesTable.defaultProps = {
  expenses: [],
  dispatchDeletedExpense: PropTypes.func,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeletedExpense: (currentExpense) => dispatch(removeExpense(currentExpense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
