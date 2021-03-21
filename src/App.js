import Heroimg from './components/Heroimg';
import Headertxt from './components/Headertxt';
import Timeline from './components/Timeline';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="nav">
            <a className="link">Creations</a>
            <a className="link">Bio</a>
            <a className="link">GitHub</a>
            <a className="link">LinkedIn</a>
            <a className="link">Reach Out</a>
        </nav>
        <Heroimg/>
        <Headertxt/>
      </header>
      <div className="projects">
        <Timeline/>
      </div>
      <div className="about">
    <About/>
      </div>
    </div>
  );
}

export default App;
