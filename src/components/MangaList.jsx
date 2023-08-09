import React, { useState } from "react";



const MangaList = ({ anime }) => {
  const [details, setDetails] =  useState(null) 
  const animes = anime.data;

  const handleClick = (anime) => {
        setDetails(anime)
  }
    return (
        <>
        
        
        <div className="container">

          

            {animes &&
                animes.map((ani, i) => (
                    <div key={i} className="img-container">
                        <img src={ani.images.jpg.large_image_url} onClick={(()=> handleClick(ani))} />
                    </div>
                ))}
        </div>

        {details && (
        <div className="animeDetails">
          <img src={details.images.jpg.large_image_url} alt={details.title} />
          <h1>Title: {details.title}</h1>
          <p><b>Summary:</b> {details.synopsis}</p>
        </div>
      )}
        </>
    );
};

export default MangaList;