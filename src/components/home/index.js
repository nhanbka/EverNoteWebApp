import { Link } from 'react-router-dom';
import NoteForm from './NoteForm';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoteList from '../notes/NoteList'

const Home = () => {
    useFirestoreConnect([{collection:'notes', orderBy:['createAt', 'desc']}]);
    const notes = useSelector((state) => state.firestore.ordered.notes);
    console.log('note:', notes);
        
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.idgesg.net/images/article/2021/02/advanced-note-taking-illustration-by-mediamodifier-via-pixabay-100878059-large.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.ctfassets.net/p0qf7j048i0q/C69CE35C642246C1AA670C69EE9F8255/88b35b0f3bf5ce4b73b768a0f7eee142/notes_splitPage.jpg?w=1000&fm=webp" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://collegeinfogeek.com/wp-content/uploads/2020/01/best-note-taking-apps-for-ipad-featured.jpg" alt="Third slide" />
                    </div>
                </div>
            </div>
            <div id="home-content">
                <hr/>
                <h5><Link to="/login" className="text-success">Wanna Try To Have Your Own Note? Login Here!</Link></h5>
                <div className="row center-align">
                    <div className="col-7" style={{paddingRight: '2vw', borderRight: '1px solid grey'}}><NoteForm /></div>
                    <div className="col-5 d-flex justify-content-center"><NoteList notes={notes}/></div>
                </div>
            </div>
            
        </div>
    )
}

export default Home