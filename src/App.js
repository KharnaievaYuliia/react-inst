import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';
import { getAlbumId, getAlbumImages } from './utils/API.js';

const useStyles = makeStyles({
  root: {
    width: '1300px',
    margin: '0 auto',
    fontSize: '50px',
    fontWeight: 'bold',
    backgroundColor: 'SkyBlue',

  },
  header: {
    width: '1300px',
    backgroundColor: 'SteelBlue',
    marginBottom: '30px',
  },
  link: {
    padding: '45px',
    textDecoration: 'none',
    color: 'DarkSlateGray',

  },
  img: {
    overflow: 'hidden',
    margin: '15px 50px',
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    border: '5px solid white',
  }

});

const App = () => {
  const [albumIdArray, setAlbumIdArray] = useState([]);
  const [albumImages, setAlbumImages] = useState([]);

  useEffect(() => {
    getAlbumId()
      .then(res => {
        const tmpArray = res.data.data.map(item => { return { id: item, title: "" }; });
        setAlbumIdArray(tmpArray);
      });
  }, []);

  useEffect(() => {
    if (albumIdArray) {
      let tmpAlbumImages = [];
      let i = 0;
      albumIdArray.map(album => {
        return getAlbumImages(album.id)
          .then(res => {
            album.title = res.data.data.title;
            tmpAlbumImages.push(
              {
                id: album.id,
                title: res.data.data.title,
                images: res.data.data.images
              }
            );
            i++;
            if (i === albumIdArray.length) setAlbumImages(tmpAlbumImages);
          })

      });
    }
  }, [albumIdArray]);

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Router>
          <header className={classes.header}>
            <Grid item >
              {albumIdArray.map(album =>
                <Link className={classes.link} key={album.id} to={`/${album.id}`}>{album.title}</Link>
              )}
            </Grid>
          </header>
          <Switch>
            {albumImages.map(album => {
              return (
                <Route key={album.id} path={`/${album.id}`}>
                  <Grid xs={5} md={8} xl={11}>
                    {album.images.map((img =>
                      <div key={img.id}>
                        <img className={classes.img} src={img.link} alt={img.id} />
                      </div>
                    ))}
                  </Grid>
                </Route>
              )
            })}
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}

export default App;