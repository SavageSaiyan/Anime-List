import React from 'react'

const MangaCard = ({manga}) => {
  return (
    <div>
      {/* added manga title  */}
       <h3>Title: {manga.title}</h3> 
        {/* added manga summary  */}
        <p>{manga.summary}</p>
        {/* added manga authors */}
        <h4>Author: {manga.authors.map((author)=> (
          <>
            {author}, &nbsp;
          </>
        ))}</h4>
        <h4>Type: {manga.type}</h4>
        <h4>Genres: {manga.genres.map((genre)=> (
          <>
            {genre}, &nbsp;
          </>
        ))}</h4>
        
        
        

    </div>
    
  )
}

export default MangaCard