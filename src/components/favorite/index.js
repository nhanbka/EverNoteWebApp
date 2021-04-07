import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoteList from '../notes/NoteList';

const Favorite = () => {
    useFirestoreConnect([{collection:'notes', where:['favorite', '==', true], 
                        orderBy:['createAt', 'desc'], storeAs:'favnotes'}]);
    const favnotes = useSelector(state => state.firestore.ordered.favnotes);
    console.log(favnotes);
    const favoriteNoteMarkup = favnotes ? (
        <div>
            <h2>Favorite Note</h2>
            <NoteList notes={favnotes} />
        </div>
    ) : <h2>No favorite note</h2>
    return (
        <div className="container d-flex justify-content-center">
            {favoriteNoteMarkup}
        </div>
    )
}

export default Favorite
