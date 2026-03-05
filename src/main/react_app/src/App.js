import './App.css';
import logo from './logo.svg';
import Routes from "./views/Routes";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to="/d1" style={{ color: 'white', marginRight: '20px' }}>Detail 1로 이동</Link>
            <Link to="/d2" style={{ color: 'white' }}>Detail 2로 이동</Link>
          </nav>
        </header>
        <Routes />
      </div>
    </Router>
  );
}

/*const App = () => (
  <>
      <f_view />
  </>
);*/

export default App;
