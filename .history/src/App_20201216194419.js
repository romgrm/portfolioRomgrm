import Navigation from './components/Navigation'
import About from './components/About'
import Body from './components/Body'
import Work from './components/Work'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
      <Router>
    <div className="App">
          <Navigation />
          <Body /> 
        <Switch>
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
        </Switch>
    </div>
      </Router>
  );
}

export default App;
