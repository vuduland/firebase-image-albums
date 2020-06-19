import React, { useState, useEffect } from 'react';
import { app } from './base';
import { NewAlbumForm } from './NewAlbumForm';
import { Route, Switch } from 'react-router-dom';
import Album from './Album'
import Home from './Home'

const db = app.firestore()

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const umount = db.collection('albums').onSnapshot((snapshot) => {
      const tempAlbums = [];
      snapshot.forEach(doc => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      })
      setAlbums(tempAlbums)
    })
    return umount;
  }, [albums])

  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home albums={albums}/>} />
        <Route path="/:album" component={Album} />
      </Switch>
    </>
  );
}

export default App;
