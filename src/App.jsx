import { useEffect, useState } from "react";
import './maga-data.jsx'
import MangaList from "./components/MangaList.jsx";
import './app.css'
import Form from './components/Form'


function App() {
  const [mangas, setMangas] = useState([

    {
      "id": "6486e9fb327b411cdacdc191",
      "title": " I’m Actually A Peerless Powerhouse",
      "sub_title": "我竟是绝世高手",
      "status": "ongoing",
      "thumb": "https://usc1.contabostorage.com/scraper/manga/6486e9fb327b411cdacdc191/thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20230807%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20230807T152138Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=888f7b07f39b1dcd4c6d9eeca1014ae065698f470686452ee835a377ca675473",
      "summary": "Jiang Chen transmigrated to the world of immortals, but he did not have any talent for cultivation and was destined to be a mortal. The one at the door? Oh,it’s just Jiang Chen’s legendary golden-winged bird.\n",
      "authors": [
        "Boom工作室",
        "愛のチカラで恋をするのだ"
      ],
      "genres": [
        "Action",
        "Fantasy",
        "Harem",
        "Drama",
        "Comedy",
        "Mystery",
        "Manhua"
      ],
      "nsfw": false,
      "type": "china",
      "create_at": 1686563323662,
      "update_at": 1686574224947
    }

  ])
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
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
      
    // setMangas(mangas)
    // mangas.map((manga)=> {
    //   console.log(manga.title)
    // })
  }




  useEffect(()=> {
    console.log(searchTerm)
      getAnime(searchTerm)
    // getAnime('Abandoned Universe');
  }, [])





  return (
    <>
      
      
      <Form mangaSearch={getAnime} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MangaList mangas={mangas} />
    </>
  )
}

export default App
