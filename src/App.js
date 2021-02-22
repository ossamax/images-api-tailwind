import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./components/imagesCard"

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const apiKey = "19743372-e0e017efa14e4fb6f9bca2452";
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .then((err) => console.log(err));
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
