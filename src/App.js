import "./components/FontAwesomeIcons";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home';
import About from './components/about';
import LoginForm from './components/auth/LoginForm';
import PageNotFound from './components/err/PageNotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Favorite from './components/favorite';
import NoteDetail from './components/notes/NoteDetail';
import EditForm from './components/notes/EditForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/note/:id" component={NoteDetail} />
              <Route path="/edit/:id" component={EditForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/favorite" component={Favorite} />
              <Route path="/about" component={About} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
