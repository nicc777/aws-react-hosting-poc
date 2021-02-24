import './App.css';
import { Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Site 1</h1>
          <br />
          <Link to="/page1">Site 1 Page 1</Link>
        </header>
      </div>
  );
}

export default App;
