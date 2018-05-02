import React, { Component } from 'react';
import './App.css';
import DisplayWeather from './components/displayWeather';

// get data on weather and store it, get location data and store it, render DisplayWeather component
// and pass it data
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      lat: "",
      lon: "",
      description: "",
      temp: "",
      changing: false
    }
    console.log("inicijalni state:", this.state);
  }

  componentDidMount() {
    this.getLocation();
  }
  
  getLocation() {
    // gets user city and coordinates and set them to state - DONE
    // consider adding more elaborate error handler
    fetch("http://ip-api.com/json")
      .then(response => response.json())
      .then(data => {
        const city = data.city;
        const lat = data.lat;
        const lon = data.lon;
        this.setState({ city, lat, lon });
      })
      .then(() => console.log("state nakon location fetch-a:", this.state))
      .then(() => this.getWeatherData());
  }
  
  getWeatherData() {
    // gets temperature and weather description for the given coordinates
    const keyID = "4e51570e41fb01c6";
    fetch(`http://api.wunderground.com/api/4e51570e41fb01c6/conditions/q/${this.state.lat},${this.state.lon}.json`)
      .then(response => response.json())
      .then(data => {
        const temp = data.current_observation.temp_c;
        const description = data.current_observation.weather;
        this.setState({ description, temp, changing: true });
      } )
      .then(() => console.log("state nakon weather fetch-a:", this.state));
  }

  render() {
    return (
      <div className="App">
        <p>sampletext</p>
        
      </div>
    );
  }
}

export default App;
