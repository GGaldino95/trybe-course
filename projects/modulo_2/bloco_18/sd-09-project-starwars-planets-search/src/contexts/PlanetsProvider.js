import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsDatabase from '../services';

function PlanetsProvider({ children }) {
  const FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const NUMERIC_FILTERS = {
    column: '',
    comparison: '',
    value: '',
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [filters, setFilters] = useState(FILTERS);
  const [numericFilter, setNumericFilter] = useState(NUMERIC_FILTERS);

  useEffect(() => { // ComponentDidMount
    async function fetchData() {
      const fetchedData = await fetchPlanetsDatabase();
      fetchedData.forEach((planet) => delete planet.residents);
      setData(fetchedData);
      setTableColumns(Object.keys(fetchedData[0]));
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilter({ ...numericFilter, [name]: value });
  };

  const handleFilterByName = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const handleFilterByNumericValues = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        numericFilter,
      ],
    });
  };

  const filterPlanetList = () => {
    const { filterByName, filterByNumericValues } = filters;

    const planetsFilteredByName = data.filter((planet) => (
      planet.name.includes(filterByName.name)));

    let planetsFilteredByNumericValues = [];

    filterByNumericValues.forEach((e, index) => {
      const { column, comparison, value } = filterByNumericValues[index];
      switch (comparison) {
      case 'maior que':
        planetsFilteredByNumericValues = data
          .filter((planet) => Number(planet[column]) > Number(value));
        break;
      case 'menor que':
        planetsFilteredByNumericValues = data
          .filter((planet) => Number(planet[column]) < Number(value));
        break;
      default:
        planetsFilteredByNumericValues = data
          .filter((planet) => Number(planet[column]) === Number(value));
        break;
      }
    });

    return filters.filterByNumericValues.length > 0
      ? planetsFilteredByNumericValues
      : planetsFilteredByName;
  };

  const contextValues = {
    data,
    tableColumns,
    filters,
    numericFilter,
    isLoading,
    handleChange,
    handleFilterByName,
    handleFilterByNumericValues,
    filterPlanetList,
  };
  const { Provider } = PlanetsContext; // <PlanetsContext.Provider>

  return (
    <Provider value={ contextValues }>
      {children}
    </Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;
