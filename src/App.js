import React, { useEffect } from 'react';
import './App.css';
import { getAlbumId, getAlbumImages } from "./utils/API";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

const App = () => {
  const [albumIdArray, setAlbumIdArray] = React.useState();
  const [albumWithImagesArray, setAlbumWithImagesArray] = React.useState();

  useEffect(() => {
    getAlbumId()
      .then((res) => setAlbumIdArray(res.data.data));
  }, []);
  useEffect(() => {
    let tmpAlbumIdWithImages = [];
    albumIdArray && albumIdArray.map((hash) => {
      getAlbumImages(hash)
        .then(res => tmpAlbumIdWithImages.push(
          {
            id: hash,
            images: res.data.data,
          }
        )
        );
    });
    albumIdArray && setAlbumWithImagesArray(tmpAlbumIdWithImages);
    console.log(tmpAlbumIdWithImages);
  }, [albumIdArray]);

  return (
    <div>
<Router> {albumWithImagesArray && albumWithImagesArray.map((album)=>{
  return <Link to={`/${album}`}>{album}</Link>
})}
</Router>
    </div>

  )
}
export default App
