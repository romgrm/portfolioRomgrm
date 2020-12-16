import Navigation from './components/Navigation'
import About from './components/About'
import Body from './components/Body'
import Work from './components/Work'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
          <Navigation />
          <Body />

        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
