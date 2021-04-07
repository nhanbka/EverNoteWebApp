import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../store/actions/noteAction';
import useInput from '../../customhook/useInput';
import { useHistory } from 'react-router-dom';

const EditForm = () => {
    const dispatch = useDispatch();
    const note = useSelector(state => state.note);
    console.log('edit form', note);
    const [noteTitle, bindNoteTitle, resetNoteTitle] = useInput(note.title);
    const [noteContent, bindNoteContent, resetNoteContent] = useInput(note.content);
    const history = useHistory();
    const updateNoteHandler = (e) => {
        e.preventDefault();
        let updateInfo = {
            id: note.id,
            title: noteTitle,
            content: noteContent
        }
        dispatch(updateNote(updateInfo));
        resetNoteTitle();
        resetNoteContent();
        history.push('/');
    }
    return (
        <div className="container">
            <h2>Edit form "{note.title} "</h2> 
            <form action="">
                <div className="input-field w-100">
                    <label htmlFor="note_title">Note Title</label>
                    <input className="form-control" id="note_title" {...bindNoteTitle} />
                </div>
                <div className="input-field w-100">
                    <label htmlFor="note_content">Note Content</label>
                    <textarea className="form-control" id="note_content" {...bindNoteContent} rows="5" style={{resize:"none"}} />
                </div>
                <p></p>
                <button className="btn btn-success" onClick={e => updateNoteHandler(e)}>Save Edit</button>
                <p></p>
            </form>
        </div>
    )
}

export default EditForm
