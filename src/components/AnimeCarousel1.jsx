import React, { useState, useEffect } from 'react';
// add images for your carousel 
const images = [
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1600/134703l.jpg',
    backgroundColor: 'rgba(71, 71, 70, 0.5)', // grey color with 50% opacity,
    title: 'JuJutsu Kaisen: 2nd Season'
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1765/135099l.jpg',
    backgroundColor: 'rgba(128, 0, 128, 0.5)', // purple color with 50% opacity,
    title: 'Kimetsu no Yaiba: Katanakaji no Sato-hen (4th Season)'
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1732/137465l.jpg',
    backgroundColor: 'rgba(71, 71, 70, 0.5)', // grey color with 50% opacity,
    title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu'
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1161/136691l.jpg',
    backgroundColor: 'rgba(128, 0, 128, 0.5)', // Purple color with 50% opacity,
    title: 'Bungou Stray Dogs 5th Season'
  },
  // ... add more images with different colors
];

const AnimeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];
// style the carousel
  const carouselStyle = {
    backgroundColor: currentImage.backgroundColor,
    border: '2px solid white',
    borderRadius: '10px',
    height: '150px', // Set a fixed height for the carousel
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Add positioning to align the controls
    top: '200px',
   
  };
// style the images
  const imgStyle = {
    // maxWidth: '100%',
    // maxHeight: '100%',
    width: '150px',
    height: '130px',
    marginRight: '300px'
  };
 // style the arrows
  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: 'white',
    cursor: 'pointer',
  };

  const prevArrowStyle = {
    ...arrowStyle,
    left: '10px', // Adjust the distance from the left edge
  };

  const nextArrowStyle = {
    ...arrowStyle,
    right: '10px', // Adjust the distance from the right edge
  };



  return (
    <div className="carousel" style={carouselStyle}>
    <a className="carousel-control-prev" style={prevArrowStyle} onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>
      &lt;
    </a>
    <h2 className='carousel-text'>Popular Anime</h2>
    <img src={currentImage.imageUrl} alt={`Image ${currentIndex}`} style={imgStyle} />
    <h2 className='carousel-title'>{currentImage.title}</h2>
    <a className="carousel-control-next" style={nextArrowStyle} onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>
      &gt;
    </a>
    {/* <h4 className='carousel-details'>details</h4> */}
  </div>
  );
};


// set the timing interval for the images for carousel
// add 4 images for carousel 
export default AnimeCarousel;
