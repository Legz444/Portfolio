import Heroimg from './components/Heroimg';
import Headertxt from './components/Headertxt';
import Timeline from './components/Timeline';
import About from './components/About';
import Navigation from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"></link>
    <div className="App">
      <header className="App-header">
        <Navigation/>
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
    </>
  );
}

export default App;
