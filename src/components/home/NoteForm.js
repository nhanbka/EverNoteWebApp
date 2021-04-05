import React from 'react';
import useInput from '../../customhook/useInput';
import { addNote } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';

const NoteForm = () => {
    const [title, bindTitle, resetTitle]  = useInput()
    const [content, bindContent, resetContent] = useInput()
    const dispatch = useDispatch()
    const handleAddEvent = (e) => {
        e.preventDefault();
        dispatch(addNote({title, content}));
        resetContent();
        resetTitle();
    }
    return (
        <div className="section" style={{paddingRight: '2vw', borderRight: '1px solid black'}}>
            <form action="">
                <div className="input-field w-100">
                    <label htmlFor="note_title">Note Title</label>
                    <input className="form-control" id="note_title" {...bindTitle} />
                </div>
                <div className="input-field w-100">
                    <label htmlFor="note_content">Note Content</label>
                    <textarea className="form-control" id="note_content" {...bindContent} rows="5" style={{resize:"none"}} />
                </div>
                <p></p>
                <button className="btn btn-success" onClick={e => handleAddEvent(e)}>Add New Note</button>
                <p></p>
            </form>
        </div>
    )
}

export default NoteForm
