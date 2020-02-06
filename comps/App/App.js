import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
// Business List Import
import BusinessList from '../BusinessList/BusinessList.js';
// Search Bars Import
import SearchBar from '../SearchBar/SearchBar.js';

/* 
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
        *                                                                                            *
        *                                Yelp API Business Results                                   *
        *                                                                                            *
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
  */ 

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api_data: []
        };
        this.callAPI = this.callAPI.bind(this);
    }

  // using Axios to get data from server.js
  callAPI(term, location, sortBy) {
    console.log('Term: ' + term, 'Location: ' + location, 'Sort By: ' + sortBy);
    const urlAPI = 'http://localhost:5000/results';

    //console.log(endPoint);
    const endPoint = urlAPI + '?term=' + term + '&location=' + location + '&sort_by=' + sortBy;
    console.log(endPoint)
;
    axios.get(endPoint) // this is where server.js lives
    .then(response => {this.setState({
        // storing API data inside of state
        api_data: response.data['businesses']
    })})
    .catch(error => { console.log(error) });
  }

  /* 
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
        *                                                                                            *
        *                                           RENDER                                           *
        *                                                                                            *
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
  */

  render() {
    console.log(this.state.api_data)

    return (
      <div className='App'>
        <h1>Ravenous</h1>
        <SearchBar searchYelpAPI={this.callAPI}/>
        <BusinessList businesses={this.state.api_data}/>
      </div>
    );
  }

}

export default App;
