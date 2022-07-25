import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import PortfolioCase from './pages/portfolioCase';
import Contacts from './pages/contacts';
import News from './pages/news';
import Blog from './pages/blog';
import Main from './pages/main';
import OurServices from './pages/ourServices';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/ourServices">
          <OurServices />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>

        <Route path="/portfolioCase">
          <PortfolioCase />
        </Route>

        <Route path="/news">
          <News />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/">
          <Main />
        </Route>

        <Route path="/Home">
          <Main />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
