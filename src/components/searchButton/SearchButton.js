import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './searchButton.css';

class SearchButton extends Component {
    render() {
        const { handleNewSearch, show } = this.props;
        if (show) {
            return (
                <Button className='search-btn' onClick={handleNewSearch} bsStyle="primary">New Search</Button>
            ) 
        } else {
            return (
                null
            )
        }

    }
}

export default SearchButton;