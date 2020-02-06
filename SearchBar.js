import React, {Component} from 'react';

import './SearchBar.css';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
    
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    
    }
   
    /* 
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
        *                                                                                            *
        *       IF THE CURRENTLY SELECTED SORT BY OTION MATCHES THE SORT BY OPTION STORED IN STATE   * 
        *       THEN RETURN THE STRING 'ACTIVE' TO CHANGE CLASS NAME & CSS                           *
        *                                                                                            *
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
    */

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSearch(event) {
        let term = this.state.term;
        let location = this.state.location.replace(' ', '_'); // removing all space and replacing them with underscores
        let sortBy = this.state.sortBy;

        this.props.searchYelpAPI(term, location, sortBy);
        event.preventDefault();
    }

    /* 
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
        *                                                                                            *
        *       THIS METHOD WILL RETURN A LIST ITEM CREATED FROM THE SORTBYOPTIONS OBJECT ABOVE      *
        *                                                                                            *
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
    */

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
        });
    }

    /* 
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
        *                                                                                            *
        *                                           RENDER                                           *
        *                                                                                            *
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
    */

    render() {

        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Food &amp; Activities" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar