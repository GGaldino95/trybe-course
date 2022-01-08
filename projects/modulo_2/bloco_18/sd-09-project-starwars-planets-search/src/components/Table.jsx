import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import Loading from './Loading';

function Table() {
  const {
    tableColumns,
    isLoading,
    filterPlanetList,
  } = useContext(PlanetsContext);

  const tableHeader = () => (
    <thead>
      <tr>
        {tableColumns.map((column) => <th key={ column }>{column}</th>)}
      </tr>
    </thead>
  );

  const tableContent = () => (
    <tbody>
      {filterPlanetList().map((planet) => (
        <tr key={ planet.name }>
          {Object.values(planet).map((content) => (
            <td key={ content }>{content}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return isLoading
    ? <Loading />
    : (
      <table>
        { tableHeader()}
        { tableContent()}
      </table>
    );
}

export default Table;
