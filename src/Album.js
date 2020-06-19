import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { NewPhoto } from './NewPhoto'
import { app } from './base'

const db = app.firestore();

export const Album = () => {
    const [image, setImage] = useState([])
    const [albumName, setAlbumName] = useState("");
    const match = useRouteMatch("/:album");
    const { album } = match.params


    useEffect(() => {
        const unmount = db.collection('albums')
            .doc(album)
            .onSnapshot((doc) => {
                setImage(doc.data().images || []);
                setAlbumName(doc.data().name)
            })
            return unmount
    }, [album])

    return <>

        <section>
            <header>
                <h1>{albumName}</h1>
                <p>Go to the <Link to="/">Home Page</Link></p>
            </header>
            {
                image.map((image) => (
                    <aside key={image.name}>
                        <img src={image.url} alt="album" />
                    </aside>
                ))
            }
        </section>
        <footer>
            <NewPhoto currentAlbum={album} />
        </footer>
    </>
}

export default Album