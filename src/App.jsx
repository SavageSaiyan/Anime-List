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
    },
    {
      "id": "648887d0327b411cdace25b3",
      "title": " Transferred to another world, but I'm saving the world of an Otome game!?",
      "sub_title": "Isekai Tensei, Ore ga Otome ge de Kyuuseishu,異世界転送、俺が乙女ゲーで救世主?!",
      "status": "ongoing",
      "thumb": "https://usc1.contabostorage.com/scraper/manga/648887d0327b411cdace25b3/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20230807%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20230807T152138Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c8e451b46fb10df3d7565341c69b775bdd17aa85edf51188f842b7d6f3e50d7a",
      "summary": "A two-part oneshot about a guy accidentally transported to an Otome game by his sister. To get out, he needs to clear a love route but he tries his best to find another way.\n",
      "authors": [
        "Tomo Takenagi",
        "Yuu Tsujimoto"
      ],
      "genres": [
        "Fantasy",
        "Shounen",
        "Comedy",
        "Isekai"
      ],
      "nsfw": false,
      "type": "japan",
      "create_at": 1686669264124,
      "update_at": 1686670028980
    },
    {
      "id": "648631ea51e4e3e4f85ef57a",
      "title": "9Th Class Sword Master: The Guardian Of The Sword",
      "sub_title": "The Ninth-Rank Sword Master: Conquering the Sword Forms ; 9클래스 소드 마스터 : 검의 구도자",
      "status": "ongoing",
      "thumb": "https://usc1.contabostorage.com/scraper/manga/648631ea51e4e3e4f85ef57a/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20230807%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20230807T152138Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e0a723ae0e82940830160e28fb7eeda14db828373c870cff59f5a28a9232364d",
      "summary": "In the year 237 of the Imperial Era, the ‘Divine War’ concludes – a war fought to protect humanity from ‘corruption.’ At the end of this battle, the Sword Saint, Kyril McGyver, faces betrayal from his closest friend and Emperor, Oliver.\nIn the end, after killing the Emperor, Kyril decides to correct all the wrongs by returning to the past.\nNow, with a power he could not acquire in his past life – the power of the sword and magic – he stands at the apex of both paths, ready to change the future.\n",
      "authors": [
        "ARC",
        "Lee Hyeon Seok"
      ],
      "genres": [
        "Action",
        "Fantasy",
        "Adventure",
        "Manhwa"
      ],
      "nsfw": false,
      "type": "korea",
      "create_at": 1686516202964,
      "update_at": 1686516734794
    },
    {
      "id": "648957b5327b411cdaceb6e5",
      "title": "A Divorced Evil Lady Bakes Cakes",
      "sub_title": " 이혼한 악녀는 케이크를 굽는다",
      "status": "ongoing",
      "thumb": "https://usc1.contabostorage.com/scraper/manga/648957b5327b411cdaceb6e5/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20230807%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20230807T152138Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e232524645c89ad28c9b9e21dd7d9b4558f84c1d248bf0a36cd0c449df3c2a65",
      "summary": "I had been in the position of Duchess for nine years for my quiet and indifferent husband, but all I had left was contempt and indifference, and the only thing I was accused of having a love affair: “There’s a limit to what I can endure for this marriage. No matter how much you cry or plead to the Emperor, I can’t stand it anymore.” “Can I sign here?” “So if you pretend to be poor like last time, this time… what?” I waved divorce papers on an indifferent day. “I’m done. Can I go now?” “Oh, you don’t have to talk about alimony, dowry, just give me back my dowry” “What are you gonna do with that little money?” My husband, who had not cared what he had done for the past nine years, asked me a question in his voice. I laughed confidently and answered: – “I’m going to open a dessert cafe.”\n",
      "authors": [
        ""
      ],
      "genres": [
        "Fantasy",
        "Romance",
        "Drama",
        "Comedy",
        "Manhwa",
        "Historical",
        "Cooking"
      ],
      "nsfw": false,
      "type": "korea",
      "create_at": 1686722485719,
      "update_at": 1686723315696
    },
    {
      "id": "64871be3327b411cdacdd3e4",
      "title": "A World-Class Walkthrough",
      "sub_title": "The World-Class Extra's Walkthrough ; 초월급 엑스트라의 공략집",
      "status": "ongoing",
      "thumb": "https://usc1.contabostorage.com/scraper/manga/64871be3327b411cdacdd3e4/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20230807%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20230807T152138Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f1a9bb8a0c5a71e9fdcb8c08bd10cbfa4bcad3bb9b683f6bbe4361273c304372",
      "summary": "The main character, Kim Kyung-Sam, is an orphan preparing for the civil service exam while working part-time at a convenience store.While immersed in the game God Forsaken World' and playing the scenario of Gilosan Ello D' Baltic', the fallen Third Prince of The Empire, without realizing it, he is transmigrated into that character.The worst part is that at the time it happened, the fallen Third Prince, better known as The Pig Prince', has been kidnapped and is on the verge of execution!We will see how Kyung-Sam uses his knowledge of the game to overcome various cris\n",
      "authors": [
        "Changwaeng",
        "Ootani Eichi"
      ],
      "genres": [
        "Action",
        "Fantasy",
        "Comedy",
        "Adventure",
        "Manhwa",
        "Isekai"
      ],
      "nsfw": false,
      "type": "korea",
      "create_at": 1686576099357,
      "update_at": 1686576851605
    },
    {
      "id": "64858fc451e4e3e4f85e7ea5",
      "title": "Abandoned Universe",
      "sub_title": "Abandoning the Universe ; Qì Yǔ Zhòu ; 弃宇宙 ; Abandon the Universe",
      "status": "ongoing",
      "thumb": "https://usc1.contabostorage.com/scraper/manga/64858fc451e4e3e4f85e7ea5/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20230807%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20230807T152138Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=35b8112f23ebc7aec46262904b931e60165227f2ac46d1c6de2e7c95edb1e1ac",
      "summary": "One day, the earth’s vitality changed, and people began to practice ancient martial arts. Seventeen years later, alien invaders invaded the earth, As a result, human beings were slaughtered and enslaved.\nIn order to stop the alien invaders, all the sovereign countries on the earth united and began to resist, opening the nuclear era on the earth, but they still could not get rid of the enslavement…\n",
      "authors": [
        "愛のチカラで恋をするのだ"
      ],
      "genres": [
        "Action",
        "Fantasy",
        "Shounen",
        "Drama",
        "Supernatural",
        "Adventure",
        "Manhua"
      ],
      "nsfw": false,
      "type": "china",
      "create_at": 1686474692480,
      "update_at": 1688020341104
    }
  ]
  )
 

  


  const getAnime = async () => {
    const apiKey = import.meta.env.VITE_API_KEY
    const url = 'https://mangaverse-api.p.rapidapi.com/manga/fetch?page=1&genres=Harem%2CFantasy';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
      }
    };
    
    // get data from the api into the search bar
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    setMangas(mangas)
    mangas.map((manga)=> {
      console.log(manga.title)
    })
  }




  useEffect(()=> {
    getAnime();
  }, [])





  return (
    <>
      
      
      
      <Form mangaSearch={getAnime}/>
      <MangaList mangas={mangas} />
    </>
  )
}

export default App
