import React from 'react'
import MangaCard from './MangaCard'


const MangaList = ({mangas}) => {

console.log(mangas)

  return (
    <div className='container'>
        
        {


            mangas.map((manga)=>(
                <div className='img-container'>
                 <img key={manga.id} src={manga.thumb} />
                {/* <MangaCard manga={manga}/> */}
                </div>
               
            ))
 
        }
    </div>
  )
}

export default MangaList