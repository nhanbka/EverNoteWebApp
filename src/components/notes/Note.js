import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteNote, changeFavorite } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Note.css';

const Note = ({note}) => {
    const colorButton = note.favorite ? "text-danger" : "text-success" ;
    const dispatch = useDispatch();
    const deleteNoteHandler = () => {
        dispatch(deleteNote(note));
    }
    const toggleFavoriteHandler = () => {
        dispatch(changeFavorite(note));
    }
    const editNoteHandler = () => {
        dispatch({type: 'EDIT_NOTE', payload: note})
    }
    return (
        <li className="list-group-item row list-element">
            {/* <div className="text-left"><i>{note.createAt}</i></div> */}
            <div className="text-left">
                <b><Link to={"/note/" + note.id}>{note.title}</Link></b> - <i>{moment(note.createAt.toDate()).fromNow()}</i>
            </div>
            <div className="text-left text-truncate">{note.content}</div>
            <div className="text-right">
                <Link to={"/edit/" + note.id}>
                    <i className="text-success" style={{cursor: 'pointer'}} onClick={editNoteHandler}><FontAwesomeIcon icon="edit" /></i> 
                </Link>&nbsp;&nbsp;
                <i className="text-success" style={{cursor: 'pointer'}} onClick={deleteNoteHandler}><FontAwesomeIcon icon="trash" /></i>&nbsp;&nbsp;
                <i className={colorButton} style={{cursor: 'pointer'}} onClick={toggleFavoriteHandler}><FontAwesomeIcon icon="heart" /></i>
            </div>
        </li>
    )
}

export default Note
