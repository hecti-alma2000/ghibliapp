import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
export const TotoroGif = ({searchTerm}) => {
  const [img, setImg] = useState(null);
  const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=Ksyyxn6fuMPpT1THrsQoDZfiMl4icDi9&q=${searchTerm}&limit=1`;

  useEffect(() => {
    fetch(gifUrl)
      .then(res => res.json())
      .then(data => {
        const imgData = data.data[0];
        setImg(imgData.images.downsized_medium.url);
      })
      .catch(error => console.error('Error fetching gif:', error));
  }, [gifUrl]);

  return (
    <div>
      {img ? <img src={img} alt="Mi vecino Totoro" /> : <p>Cargando...</p>}
    </div>
  );
};

TotoroGif.propTypes = {
  searchTerm: PropTypes.string.isRequired
};