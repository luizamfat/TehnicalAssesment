import React from "react";
import  "./search_bar.css";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            formControls: {
                username: {
                    value: '',
                    placeholder: 'Username...'
                }
            }
        };
    }

    handleChange = event => {

        const name = event.target.name;
        const value = event.target.value;
        const updatedControls = this.state.formControls;
        const updatedFormElement = updatedControls[name];

        updatedFormElement.value = value;
        updatedControls[name] = updatedFormElement;

        this.setState({
            formControls: updatedControls,
        });
    };
    handleSearch(){
        let user = this.state.formControls.username.value;
        fetch('https://api.github.com/users/'+ user + '/gists')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <form>
                    <input className="input_style" type="text" placeholder="Username..." name="username"  onChange={this.handleChange}/>
                </form>
                <button className="button_style" onClick={this.handleSearch}>SEARCH</button>
            </div>
        );
    }
}
export default SearchBar;