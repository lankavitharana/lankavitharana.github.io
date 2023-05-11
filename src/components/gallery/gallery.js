import React from 'react';

function Gallery() {
  // Replace this with your logic to fetch and display the gallery items
  const galleryItems = [
    {
      id: 1,
      name: 'Item 1',
      imageUrl: 'https://example.com/item1.jpg',
    },
    {
      id: 2,
      name: 'Item 2',
      imageUrl: 'https://example.com/item2.jpg',
    },
    {
      id: 3,
      name: 'Item 3',
      imageUrl: 'https://example.com/item3.jpg',
    },
    // Add more gallery items as needed
  ];

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-items">
        {galleryItems.map(item => (
          <div key={item.id} className="gallery-item">
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
