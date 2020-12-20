import Navigation from './components/Navigation'
import About from './components/About'
import Body from './components/Body'
import Work from './components/Work'
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, NavLink, useLocation } from "react-router-dom";


function App() {

  const location = useLocation();
  return (
    <>
      <Router>
        <Navigation />
        <Switch location={location} key={location.pathname}>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
