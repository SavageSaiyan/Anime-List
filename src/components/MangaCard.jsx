import React from 'react'

const MangaCard = ({manga}) => {
  return (
    <div className='manga-info'>
      {/* added manga title  */}
       <h3>Title: {manga.title}</h3> 
        {/* added manga summary  */}
        <p><b>Summary:</b> {manga.summary}</p>
        {/* added manga authors */}
        <h4>Author: {manga.authors.map((author)=> (
          <>
            {author}, &nbsp;
          </>
        ))}</h4>
        {/* added manga type */}
        <h4>Type: {manga.type}</h4>
        {/* added manga genre */}
        <h4>Genres: {manga.genres.map((genre)=> (
          <>
            {genre}, &nbsp;
          </>
        ))}</h4>
        
        
        

    </div>
    
  )
}

export default MangaCard