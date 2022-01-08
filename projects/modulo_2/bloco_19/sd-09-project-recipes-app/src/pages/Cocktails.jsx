import React, { useContext } from 'react';
import Recipes from '../components/Recipes';
import SearchBar from '../components/SearchBar';
import RecipesContext from '../contexts/RecipesContext';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import FilterButtons from '../components/FilterButtons';

function Cocktails() {
  const {
    toggledSearchBar,
  } = useContext(RecipesContext);

  return (
    <section>
      <Header page="Bebidas" />
      {toggledSearchBar && <SearchBar category="cocktail" />}
      <FilterButtons />
      <Recipes path="/bebidas" />
      <BottomMenu />
    </section>
  );
}

export default Cocktails;
