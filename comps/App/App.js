import React, {Component} from 'react';
import './App.css';
// Business List Import
import BusinessList from '../BusinessList/BusinessList.js';
// Search Bars Import
import SearchBar from '../SearchBar/SearchBar.js';

// YELP API Business results // 
let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

let businesses = [business, business, business, business, business, business];

/* 
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
        *                                                                                            *
        *                                Yelp API Business Results                                   *
        *                                                                                            *
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
  */ 

class App extends Component {

  searchYelpAPI(term, location, sortBy) {
    console.log('Term: ' + term, 'Location: ' + location, 'Sort By: ' + sortBy);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    const url = 'https://api.yelp.com/v3/businesses/search';
    const params = `?term=${term}&location=${location}&sort_by=${sortBy}`
    const api_key = '4FphwD6tGKVKOyAcxCMxlrhlXEYAPHOQmdQ1q36R8hjaReA7L_Na6lGdZQyV3jJkZHqW0ejiDp5t0LgojC5Cj34nPNcKKJIS2hwYmYkUO1bjq0Pi2zOYRDRx-A0yXnYx';
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
      }
    };

    xhr.open('GET', url + params);
    xhr.setRequestHeader('Authorization', 'Bearer ' + api_key);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();

  
    
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
      <div className='App'>
        <h1>Ravenous</h1>
        <SearchBar searchYelpAPI={this.searchYelpAPI}/>
        <BusinessList businesses={businesses}/>
      </div>
    );
  }

}

export default App;