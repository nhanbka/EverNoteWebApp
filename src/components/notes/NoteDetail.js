import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

const NoteDetail = (props) => {
    const id = props.match.params.id;
    useFirestoreConnect([{collection: 'notes' , doc: id }]);
    const note = useSelector(({ firestore: { data } }) => data.notes && data.notes[id]);
    const noteMarkup = !isLoaded(note) ? (
        <div className="container" style={{marginTop: '20px'}}>
            <div className="card text-center">
                <div className="card-header">Loading...</div>
                <div className="card-body">
                    <p className="card-text">{note?.content}</p>
                </div>
                <div className="card-footer text-muted">
                    <i>{moment(note?.createAt.toDate()).fromNow()}</i>
                </div>
            </div>
        </div>) : isEmpty(note) ? (
        <div className="container" style={{marginTop: '20px'}}>
            <div className="card text-center">
                <div className="card-header">
                    The note content is empty
                </div>
                <div className="card-body">
                    <p className="card-text">{note?.content}</p>
                </div>
                <div className="card-footer text-muted">
                    <i>{moment(note?.createAt.toDate()).fromNow()}</i>
                </div>
            </div>
        </div>) : (
            <div className="container" style={{marginTop: '20px'}}>
                <div className="card text-center">
                    <div className="card-header">
                        {note.title}
                    </div>
                    <div className="card-body">
                        <p className="card-text">{note.content}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <i>{moment(note.createAt.toDate()).fromNow()}</i>
                    </div>
                </div>
            </div>
        );
    return (
        <div>
            {noteMarkup}
            
        </div>
    )
}

export default NoteDetail
