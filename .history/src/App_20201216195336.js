import Navigation from './components/Navigation'
import About from './components/About'
import Body from './components/Body'
import Work from './components/Work'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
      <Switch>
          <Navigation />
          <Body /> 
          <Route path="/work">
            <Work />
          </Route>
          <Route exact path="/about" component={About} />>
      </Switch>
  );
}

export default App;
