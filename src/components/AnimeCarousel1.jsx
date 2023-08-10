import React, { useState, useEffect } from 'react';

const images = [
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1600/134703l.jpg',
    backgroundColor: 'blue',
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1765/135099l.jpg',
    backgroundColor: 'green',
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1732/137465l.jpg',
    backgroundColor: 'red',
  },
  {
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1161/136691l.jpg',
    backgroundColor: 'purple',
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
  };

  return (
    <div className="carousel" style={carouselStyle}>
      <img src={currentImage.imageUrl} alt={`Image ${currentIndex}`} />
    </div>
  );
};


// set the timing interval for the images for carousel

export default AnimeCarousel;
