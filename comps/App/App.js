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
        },
        {
            "id": "tU1I5sBwyIY9ikF5kyCSOg",
            "alias": "ollo-malibu",
            "name": "Ollo",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/DJUIp9e5J1Mkxfpi0WB3nA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/ollo-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 658,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.034073,
                "longitude": -118.693215
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$",
            "location": {
                "address1": "23755 Malibu Rd",
                "address2": "",
                "address3": "",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "23755 Malibu Rd",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13103171444",
            "display_phone": "(310) 317-1444",
            "distance": 5599.167950426641
        },
        {
            "id": "pjXxukY-PNnB6WFxZNQ_RQ",
            "alias": "malibu-farm-restaurant-malibu",
            "name": "Malibu Farm Restaurant",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/bXvrWTcoapCXLWbfxggHQA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/malibu-farm-restaurant-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 1164,
            "categories": [
                {
                    "alias": "salad",
                    "title": "Salad"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "burgers",
                    "title": "Burgers"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.0356260579186,
                "longitude": -118.675627378077
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$",
            "location": {
                "address1": "23000 Pacific Coast Hwy",
                "address2": "",
                "address3": "Front Of The Pier",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "23000 Pacific Coast Hwy",
                    "Front Of The Pier",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13104568850",
            "display_phone": "(310) 456-8850",
            "distance": 7224.092777631673
        },
        {
            "id": "Dj87zlfqxb_FK_0npWl95g",
            "alias": "the-country-kitchen-malibu",
            "name": "The Country Kitchen",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/EJRxaCDGYIU26ubNr-lQGQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-country-kitchen-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 231,
            "categories": [
                {
                    "alias": "burgers",
                    "title": "Burgers"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.0372249,
                "longitude": -118.6376733
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "21239 Pacific Coast Hwy",
                "address2": "",
                "address3": "",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "21239 Pacific Coast Hwy",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13104568708",
            "display_phone": "(310) 456-8708",
            "distance": 10727.158662926115
        },
        {
            "id": "k6M-0oGYMH7cnlMPSta1Aw",
            "alias": "neptunes-net-malibu-6",
            "name": "Neptune's Net",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/r-sKKsdYeckm92bDZlPOwg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/neptunes-net-malibu-6?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 1529,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.053131,
                "longitude": -118.962495
            },
            "transactions": [
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "42505 Pacific Coast Hwy",
                "address2": "",
                "address3": "",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "42505 Pacific Coast Hwy",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13104573095",
            "display_phone": "(310) 457-3095",
            "distance": 19341.41403971517
        },
        {
            "id": "IthDXFYZW1f5PRseK4sEVw",
            "alias": "geoffreys-malibu-malibu",
            "name": "Geoffrey's Malibu",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/cYCRFSxEcPgXzD0J0kZ0Dw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/geoffreys-malibu-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 2399,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.025366,
                "longitude": -118.769838
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "27400 Pacific Coast Hwy",
                "address2": "",
                "address3": "",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "27400 Pacific Coast Hwy",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13104571519",
            "display_phone": "(310) 457-1519",
            "distance": 1699.0519023372995
        },
        {
            "id": "rwh-1qPqhJ6-spDFsUdB9A",
            "alias": "kristys-village-cafe-malibu",
            "name": "Kristy's Village Cafe",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/J9iQ8vdh22vh1RYVlyYLdA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kristys-village-cafe-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 579,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.0316729723852,
                "longitude": -118.842771383189
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "30745 Pacific Coast Hwy",
                "address2": null,
                "address3": "",
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "30745 Pacific Coast Hwy",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+13104571018",
            "display_phone": "(310) 457-1018",
            "distance": 8184.883582373074
        },
        {
            "id": "IT1XEx3rmvVMkYVHho3J1g",
            "alias": "broad-street-oyster-company-malibu",
            "name": "Broad Street Oyster Company",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/B1WC6Os931ZP8zYC_cdydA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/broad-street-oyster-company-malibu?adjust_creative=5VKjia_fEZ5pYocZBTTKGQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=5VKjia_fEZ5pYocZBTTKGQ",
            "review_count": 172,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.03505,
                "longitude": -118.68419
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "23359 Pacific Coast Hwy",
                "address2": "",
                "address3": null,
                "city": "Malibu",
                "zip_code": "90265",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "23359 Pacific Coast Hwy",
                    "Malibu, CA 90265"
                ]
            },
            "phone": "+14246440131",
            "display_phone": "(424) 644-0131",
            "distance": 6467.806433174373
        }
    ],
    "total": 14100,
    "region": {
        "center": {
            "longitude": -118.75396728515625,
            "latitude": 34.033142805584575
        }
    }
};

let businesses = [];

for (var i = 0; i < business['businesses'].length; i++) {
  businesses.push(business['businesses'][i]);
}

/* 
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
        *                                                                                            *
        *                                Yelp API Business Results    **NOT DONE**                   *
        *                                                                                            *
        * * * * * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * *
  */ 

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api_data: null
        };
    }

  searchYelpAPI(term, location, sortBy) {
    console.log('Term: ' + term, 'Location: ' + location, 'Sort By: ' + sortBy);
  }
  // using Axios to get data from server.js file
  callAPI() {
    axios.get('http://localhost:5000/results')
    .then(response => { console.log(response.data['businesses'])})
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