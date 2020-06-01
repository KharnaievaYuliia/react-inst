import React, { useState, useEffect } from 'react';
import './App.css';
import { getAlbumId, getAlbumImages } from './utils/API.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';

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

export default App;