import "./components/FontAwesomeIcons"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/home'
import LoginForm from './components/auth/LoginForm'
import PageNotFound from './components/err/PageNotFound'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/login" component={LoginForm}></Route>
              <Route ><PageNotFound /></Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
