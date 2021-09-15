import logo from './logo.svg';
import './App.css';
import SearchBar from "./search_bar"

function App() {

  return (
    <div className="App">
        <div className="title">
            Sector Labs Assessment
        </div>
        <div className="search_bar">
            <SearchBar/>
        </div>
    </div>
  );
}

export default App;
