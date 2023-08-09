import React from 'react';

export const WatchList = ({ watchlistTitle }) => {
  return (
    <>
      <div className='watchlist'>
        <h1><u>WatchList</u></h1>
        {watchlistTitle && <p>{watchlistTitle}</p>}
      </div>
    </>
  );
};
