import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteNote } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';

const Note = ({note}) => {
    const colorButton = note.favorite ? "text-danger" : "text-success" ;
    const dispatch = useDispatch();
    const deleteNoteHandler = () => {
        dispatch(deleteNote(note));
    }
    return (
        <il className="list-group-item row">
            {/* <div className="text-left"><i>{note.createAt}</i></div> */}
            <div className="text-left">
                <b>{note.title}</b>
            </div>
            <div className="text-left text-truncate">{note.content}</div>
            <div className="text-right">
                <i className="text-success" style={{cursor: 'pointer'}} onClick={deleteNoteHandler}><FontAwesomeIcon icon="trash" /></i>&nbsp;
                <i className={colorButton} style={{cursor: 'pointer'}}><FontAwesomeIcon icon="heart" /></i>
            </div>
        </il>
    )
}

export default Note
