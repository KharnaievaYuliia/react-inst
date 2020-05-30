import React, { useEffect } from 'react';
import './App.css';
import { getAlbumId, getAlbumImages } from "./utils/API";
import {BrowserRouter as Router, Link} from "react-router-dom";

const App = () => {
  const [albumIdArray, setAlbumIdArray] = React.useState();
  const [albumWithImagesArray, setAlbumWithImagesArray] = React.useState([]);

  useEffect(() => {
    getAlbumId().then((res) => setAlbumIdArray(res.data.data));
  }, []);

  useEffect(() => {
    albumIdArray &&
      albumIdArray.map((hash) => {
        getAlbumImages(hash).then((res) => {
          const result = res.data.data;
          console.log("result", result);
          setAlbumWithImagesArray((prev) => [
            ...prev,
            { id: hash, images: { ...result } },
          ]);
        });
      });
  }, [albumIdArray]);

  console.log(albumIdArray);
  console.log(albumWithImagesArray);
  return (
    <div>
      <Router>
        {albumWithImagesArray &&
          albumWithImagesArray.length >= 1 &&
          albumWithImagesArray.map((album) => {
            return (
              <div>
                <Link to={`/${album.id}`}>{album.id}</Link>
              </div>
            );
          })}
      </Router>
    </div>
  );
};

export default App
