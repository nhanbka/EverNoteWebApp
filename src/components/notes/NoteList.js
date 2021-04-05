import React from 'react'
import Note from './Note'

const NoteList = ({ notes }) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <ul className="list-group list-group-flush">
                { notes && notes.map(note => <Note note={note} key={note.id} />) }
            </ul>
        </div>
    )
}

export default NoteList
