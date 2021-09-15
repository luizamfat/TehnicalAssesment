import React from "react";
import "./search_bar.css";
import {useState} from "react";

export const SearchBar = ({addItem}) => {
    const [username, setUsername] = useState();

    const handleSearch = () => {

        fetch('https://api.github.com/users/' + username.username + '/gists')
            .then(res => res.json())
            .then(data => {
                addItem(data);
            })
    }

    return (
        <div>
            <form>
                <input id="inputID" className="input_style" type="text" placeholder="Username..." name="username"
                       onChange={(e) =>
                           setUsername({username: e.target.value})
                       }/>
            </form>
            <button className="button_style" onClick={handleSearch}> SEARCH</button>
        </div>
    );

}


