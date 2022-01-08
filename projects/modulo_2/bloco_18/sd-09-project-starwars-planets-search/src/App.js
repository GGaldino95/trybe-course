import React from 'react';
import PlanetsProvider from './contexts/PlanetsProvider';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetsProvider>
      <h1>STAR WARS DATATABLE</h1>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
