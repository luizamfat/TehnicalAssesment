import './App.css';
import {SearchBar} from "./search_bar"
import {CardList} from "./cards.js"
import {useState, useEffect} from "react";


function App() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems(item);
    };

    return (
        <div className="App">
            <div className="title">
                Sector Labs Assessment
            </div>
            <div className="search_bar">
                <SearchBar addItem={addItem}/>
            </div>
            <div className="cards">
                <CardList gists={items}/>
            </div>
        </div>
    );
}

export default App;
