import React, { useContext } from 'react';
import { Context } from './RedditContext';

const RefreshButton = () => {
  const { isFetching, refreshSubreddit } = useContext(Context);

  if (isFetching) return null;

  return (
    <button
      type="button"
      onClick={(event) => refreshSubreddit(event)}
      disabled={isFetching}
    >
      Refresh
    </button>
  );
};

export default RefreshButton;
