import './App.css';
import { Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Site 1</h1>
          <br />
          <Link to="/page1">Site 1 Page 1</Link>
          <br />
          <a href="/site2/home">Site2 Home</a>
          {/* <Link to="/site2">Site2 Home</Link> */}
          {/* <br />
          <a href="/site2/page1">Site2 Page 1</a> */}
          {/* <Link to="/site2/page1">Site 2 Page 1</Link> */}
        </header>
      </div>
  );
}

export default App;
