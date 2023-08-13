import React, { useState } from "react";
import { WatchList } from "./WatchList";




// create the state of the details of the anime
const MangaList = ({ anime }) => {
  const [details, setDetails] = useState(null);
  // create the state of the WatchList
  // const [watchlistTitle, setWatchlistTitle] = useState(null);
  const [watchlistTitle, setWatchlistTitle] = useState([]);
  const animes = anime.data;

  const handleClick = (anime) => {
    setDetails(anime);
  };
// create the toggle for removing and adding title to watchlist
  const handleWatchlistToggle = () => {
    if (details && details.title) {
      // if (watchlistTitle === details.title) {
      //   setWatchlistTitle(null);
      if (watchlistTitle.includes(details.title)) {
        setWatchlistTitle(watchlistTitle.filter(item=> item != details.title));
      } else {
        // setWatchlistTitle(details.title);
        setWatchlistTitle([...watchlistTitle,details.title]);
      }
    }
  };

  const handleHideWatchListToggle = () => {
    // if button clicked unhide watchlist div
  }

  return (
    <>
    {/* create the containers for the content */}
      <div className="container">
        {animes &&
          animes.map((ani, i) => (
            <div key={i} className="img-container">
              <img
                src={ani.images.jpg.large_image_url}
                alt={ani.title}
                onClick={() => handleClick(ani)}
              />
            </div>
            
          ))}
      </div>

            

      {details && (
        <div className="animeDetails">
          <img src={details.images.jpg.large_image_url} alt={details.title} />
          <h1>{details.title}</h1>
          <p className="summary">
            <b>Summary:</b> {details.synopsis}
          </p>
          <iframe width="200px" height="215" src={details.trailer.embed_url} frameborder="0" allowfullscreen title="Trailer"></iframe>

          {/* <button className="button-hover" onClick={handleWatchlistToggle}>
            
                {watchlistTitle.includes(details.title) 
              ? "Remove from Watchlist"
              : "Add to Watchlist"}
          </button> */}
          <button className="button-hide" onClick={handleWatchlistToggle}>
            {watchlistTitle.includes(details.title) 
            ? "Remove from Watchlist"
            : "Add to Watchlist"}
          </button>
        </div>
      )}




      <WatchList watchlistTitle={watchlistTitle} />

      
    </>
  );
};

export default MangaList;
