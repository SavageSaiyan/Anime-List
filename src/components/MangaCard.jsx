import React from 'react'

const MangaCard = ({manga}) => {
  return (
    <div>
       <h3>Title: {manga.title}</h3> 
        <p>{manga.summary}</p>
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