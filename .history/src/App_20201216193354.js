import Navigation from './components/Navigation'
import About from './components/About'
import Body from './components/Body'
import Work from './components/Work'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>

      <Route exact path="/work" component={Work}/>
      <Route exact path="/"/>
      <Navigation />
      <Body />
      </Switch>
    </div>
  );
}

export default App;
