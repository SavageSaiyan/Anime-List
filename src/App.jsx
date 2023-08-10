import { useEffect, useState } from "react";
import './maga-data.jsx'
import MangaList from "./components/MangaList.jsx";
import './app.css'
import Form from './components/Form'
import { WatchList } from "./components/WatchList.jsx";
import AnimeCarousel from './AnimeCarousel';

function App() {
 const [anime, setAnime] = useState({})
 
 
  
  const [searchTerm, setSearchTerm] = useState('')
  

  const getAnime = async (searchTerm) => {
    const apiKey = import.meta.env.VITE_API_KEY
    const url = `https://mangaverse-api.p.rapidapi.com/manga/search?text=${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        // 'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Key': '510ba1a0b4msh37b03b55bdaac3ap1d46f9jsn6387df4b82e9',

        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
      }
    };
    
    try {
      //const response = await fetch(url, options);
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)
      const result = await response.json();
      setAnime(result)
      console.log(result); 
    } catch (error) {
      console.error(error);
    }
      
    // setMangas(mangas)
    // mangas.map((manga)=> {
    //   console.log(manga.title)
    // })
  }

  const handleSubmit = {
    
  }


  useEffect(()=> {
    console.log("useEffectcall")
      getAnime("")
    // getAnime('Abandoned Universe');
  }, [])





  return (
    <>
      
      
      <Form mangaSearch={getAnime} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MangaList anime={anime} />
      <WatchList />
      <AnimeCarousel />
    </>
  )
}

export default App
