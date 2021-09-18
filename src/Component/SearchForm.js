import React, { Component } from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchTerm: "batman"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render() {
        return(
            <form onSubmit={this.props.onSubmit}>
                <input value={this.state.searchTerm} onChange={this.handleChange}/>
                <button type="submit">Search</button>
            </form>
        );
    }
    
}

export default SearchForm;