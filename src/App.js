import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To React App
        </p>
        <a
          className="App-link"
          href="http://shahbazmirza.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet With Shahbaz Mirza
        </a>
      </header>
    </div>
  );
}

export default App;
