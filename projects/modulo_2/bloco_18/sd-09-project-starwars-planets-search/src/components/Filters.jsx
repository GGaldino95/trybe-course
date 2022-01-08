import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Filters() {
  const {
    handleChange,
    handleFilterByName,
    handleFilterByNumericValues,
    tableColumns,
  } = useContext(PlanetsContext);

  const renderNameFilter = () => (
    <label htmlFor="name-filter">
      <input
        data-testid="name-filter"
        id="name-filter"
        type="text"
        onChange={ handleFilterByName }
      />
    </label>
  );

  const renderColumnFilter = () => {
    const excludingOptions = [
      'name', 'climate', 'gravity', 'terrain', 'films', 'created', 'edited', 'url',
    ];

    return (
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        <option style={ { display: 'none' } }> </option>
        { tableColumns
          .filter((column) => (
            excludingOptions.every((excluding) => excluding !== column)))
          .map((option) => <option key={ option }>{option}</option>)}
      </select>
    );
  };

  const renderComparisonFilter = () => (
    <select
      data-testid="comparison-filter"
      name="comparison"
      onChange={ handleChange }
    >
      <option style={ { display: 'none' } }> </option>
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );

  const renderValueFilter = () => (
    <label htmlFor="value-filter">
      <input
        data-testid="value-filter"
        id="value-filter"
        name="value"
        type="text"
        onChange={ handleChange }
      />
    </label>
  );

  const renderFilterButton = () => (
    <button
      data-testid="button-filter"
      type="button"
      onClick={ handleFilterByNumericValues }
    >
      Filtrar
    </button>
  );

  return (
    <section>
      { renderNameFilter()}
      { renderColumnFilter()}
      { renderComparisonFilter()}
      { renderValueFilter()}
      { renderFilterButton()}
    </section>
  );
}

export default Filters;
