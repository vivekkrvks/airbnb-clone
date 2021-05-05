import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    //BEM
    <div className="app">
    <Router>
      <Header/>

      <Switch>
      
        <Route path="/search" >
            <SearchPage />
        </Route>
        <Route path="/" >
        <Home />
    </Route>
      </Switch>

      <Footer />
    </Router>
   


    </div>
  );
}

export default App;
