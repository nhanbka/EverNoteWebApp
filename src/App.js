import "./components/FontAwesomeIcons";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home';
import LoginForm from './components/auth/LoginForm';
import PageNotFound from './components/err/PageNotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Favorite from './components/favorite';
import NoteDetail from './components/notes/NoteDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/note/:id" component={NoteDetail} />
              <Route path="/login" component={LoginForm} />
              <Route path="/favorite" component={Favorite} />
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
