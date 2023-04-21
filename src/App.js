import logo from './logo.svg';
import './App.css';
import axe from '../src/assets/portraits/npc_dota_hero_axe.webm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <video width="150rem" height="200rem">
        <source src={axe} type='video/webm'></source>
      </video>
    </div>
  );
}

export default App;
