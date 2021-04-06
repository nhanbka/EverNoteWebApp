import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoteList from '../notes/NoteList';

const Favorite = () => {
    useFirestoreConnect([{collection:'notes', where:['favorite', '==', true], 
                        orderBy:['createAt', 'desc'], storeAs:'favnotes'}]);
    const favnotes = useSelector(state => state.firestore.ordered.favnotes);
    console.log(favnotes);
    return (
        <div className="container">
            <NoteList notes={favnotes} />
        </div>
    )
}

export default Favorite
