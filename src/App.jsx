
function App() {

  const getAnime = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    const url = 'https://animes5.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }







  return (
    <>
      
    </>
  )
}

export default App
