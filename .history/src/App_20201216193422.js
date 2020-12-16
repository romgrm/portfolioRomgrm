import Navigation from './components/Navigation'
import About from './components/About'
import Body from './components/Body'
import Work from './components/Work'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>

      <Navigation />
      <Body />
      <Route exact path="/work" component={Work}/>
      <Route exact path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
