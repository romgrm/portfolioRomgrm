import Navigation from './Components/HomeComponents/Navigation'
import Home from './Pages/Home'
import About from './Pages/About'
import Work from './Pages/Work'
import Slider from "../src/Components/WorkComponents/Slider"
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, NavLink, useLocation } from "react-router-dom";


function App() {

  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Navigation />
        <Switch location={location} key={location.pathname}>
          {/* <Route path="/work" component={Work} /> */}
          <Route path="/about" component={About} />
          <Route path="/" component={Home} /> 
          <Route path="/work" component={Slider}/>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
