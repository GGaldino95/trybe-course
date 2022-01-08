import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [toggledSearchBar, setToggledSearchBar] = useState(false);
  const [toggledProfileButton, setToggledProfileButton] = useState(true);
  const [toggledSearchButton, setToggledSearchButton] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [recomendations, setRecomendations] = useState([]);

  const showSearchBar = () => setToggledSearchBar(!toggledSearchBar);

  const contextValues = {
    toggledSearchBar,
    showSearchBar,
    toggledProfileButton,
    setToggledProfileButton,
    toggledSearchButton,
    setToggledSearchButton,
    isLoading,
    setLoading,
    recipe,
    setRecipe,
    favoriteRecipes,
    setFavoriteRecipes,
    recomendations,
    setRecomendations,
  };
  const { Provider } = RecipesContext;

  return (
    <Provider value={ contextValues }>
      {children}
    </Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecipesProvider;
