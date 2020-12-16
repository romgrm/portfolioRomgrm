import Navigation from './components/Navigation'
import About from './components/About'
import Body from './components/Body'
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Work/>
      <About/>
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
