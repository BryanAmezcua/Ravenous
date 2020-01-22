import React, {Component} from 'react';
import './App.css';
// Business List Import
import BusinessList from '../BusinessList/BusinessList.js';
// Search Bars Import
import SearchBar from '../SearchBar/SearchBar.js';

class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <h1>Ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }

}

export default App;