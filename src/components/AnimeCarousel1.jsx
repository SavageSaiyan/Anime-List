import React, { useState, useEffect } from 'react';

const images = [
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1600/134703l.jpg',
    backgroundColor: 'rgba(71, 71, 70, 0.5)', // Blue color with 50% opacity,
    
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1765/135099l.jpg',
    backgroundColor: 'rgba(128, 0, 128, 0.5)', // purple color with 50% opacity,
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1732/137465l.jpg',
    backgroundColor: 'rgba(71, 71, 70, 0.5)', // blue color with 50% opacity,
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1161/136691l.jpg',
    backgroundColor: 'rgba(128, 0, 128, 0.5)', // Purple color with 50% opacity,
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

  const imgStyle = {
    // maxWidth: '100%',
    // maxHeight: '100%',
    width: '150px',
    height: '130px',
    marginRight: '600px'
  };

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
    <img src={currentImage.imageUrl} alt={`Image ${currentIndex}`} style={imgStyle} />
    <a className="carousel-control-next" style={nextArrowStyle} onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>
      &gt;
    </a>
    <h2 className='carousel-text'></h2>
  </div>
  );
};


// set the timing interval for the images for carousel
// add 4 images for carousel 
export default AnimeCarousel;
