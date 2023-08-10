import React from 'react';
// create WatchList div 
export const WatchList = ({ watchlistTitle }) => {
  return (
    <>
      <div className='watchlist'>
        <h1 className='watchlist-title'><u>WatchList</u></h1>
        {watchlistTitle && watchlistTitle.map(item=><p>{item}</p>) }
      </div>
    </>
  );
};
