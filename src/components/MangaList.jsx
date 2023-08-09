import React, { useState } from "react";
import { WatchList } from "./WatchList";

const MangaList = ({ anime }) => {
  const [details, setDetails] = useState(null);
  const [watchlistTitle, setWatchlistTitle] = useState(null);
  const animes = anime.data;

  const handleClick = (anime) => {
    setDetails(anime);
  };

  const handleWatchlistToggle = () => {
    if (details && details.title) {
      if (watchlistTitle === details.title) {
        setWatchlistTitle(null);
      } else {
        setWatchlistTitle(details.title);
      }
    }
  };

  return (
    <>
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
          <p><b>Summary:</b> {details.synopsis}</p>
          <button onClick={handleWatchlistToggle}>
            {watchlistTitle === details.title ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      )}
      <WatchList watchlistTitle={watchlistTitle} />
    </>
  );
};

export default MangaList;
