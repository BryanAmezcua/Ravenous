import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
// Business List Import
import BusinessList from '../BusinessList/BusinessList.js';
// Search Bars Import
import SearchBar from '../SearchBar/SearchBar.js';

// YELP API Business results // 

let business = {
    "businesses": [
        {
            "id": "HzlB9bkN-kmjc56GbVtzDw",
            "alias": "malibu-seafood-fresh-fish-market-and-patio-cafe-malibu",
            "name": "Malibu Seafood Fresh Fish Market & Patio Cafe",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/IRDkPmlYQNDpANhFQLrh2w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/malibu-seafood-fresh-fish-market-and-patio-cafe-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 2486,
            "categories": [
                {
                    "alias": "seafoodmarkets",
                    "title": "Seafood Markets"
                },
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.033779,
                "longitude": -118.73505
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "25653 Pacific Coast Hwy",
                "address2": "",
                "address3": "",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "25653 Pacific Coast Hwy",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13104563430",
            "display_phone": "(310) 456-3430",
            "distance": 1744.6312519814066
        },
        {
            "id": "ih1OaYQh2kP3UTNHTpIHug",
            "alias": "malibu-farm-pier-cafe-malibu",
            "name": "Malibu Farm Pier Cafe",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/h-o5o0jgIkmV5qKtRDbUHg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/malibu-farm-pier-cafe-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 1551,
            "categories": [
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.0356057756051,
                "longitude": -118.675600891263
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "23000 Pacific Coast Hwy",
                "address2": "",
                "address3": "End Of The Pier",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "23000 Pacific Coast Hwy",
                    "End Of The Pier",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13104561112",
            "display_phone": "(310) 456-1112",
            "distance": 7226.44672372068
        },
        {
            "id": "ofhOdRqrefmIXdiJV8Vx2g",
            "alias": "lilys-malibu-malibu",
            "name": "Lily's Malibu",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/EX9bu71XUMx4bTPaHMT8SQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/lilys-malibu-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 781,
            "categories": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.02088,
                "longitude": -118.81016
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "29211 Heathercliff Rd",
                "address2": "",
                "address3": "",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "29211 Heathercliff Rd",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13104573745",
            "display_phone": "(310) 457-3745",
            "distance": 5339.600667805696
        }
    ]
};

let businesses = [];

for (var i = 0; i < business['businesses'].length; i++) {
  businesses.push(business['businesses'][i]);
}

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
    axios.get('http://localhost:5000/results') // this is where server.js lives
    .then(response => {this.setState({
        // storing API data inside of state
        api_data: response.data['businesses']
    })})
    .catch(error => { console.log(error) });
  }

  // as soon as the "App" component is added to the DOM tree, we call the API
  componentDidMount() {
      this.callAPI();
  }

  /* 
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
        *                                                                                            *
        *                                           RENDER                                           *
        *                                                                                            *
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
  */

  render() {
    console.log(`Num of results: `, business['businesses'].length);
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