import Navigation from './Components/HomeComponents/Navigation'
import About from './Pages/About'
import Body from './Pages/Body'
import Work from './Pages/Work'
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, NavLink, useLocation } from "react-router-dom";


function App() {

  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Navigation />
        <Switch location={location} key={location.pathname}>
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/" component={Body} /> 
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
