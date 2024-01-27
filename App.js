import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const api = {
  key: "c70202472f705cbd35fe5b7291af0f67",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  const [Search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  console.log(Search);

  const searchPressed = async () => {
    try {
      const response = await axios.get(`${api.base}weather?q=${Search}&units=metric&APPID=${api.key}`)
      setWeather(response.data);
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Weather App</h3>
        <input
          type="text"
          placeholder="Enter your city name"
          name="name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
        <br />
        <p>{weather.name}</p>
        <p>{weather.main && weather.main.temp} °C</p>
        <p>{weather.weather && weather.weather[0].description}</p>
      </header>
    </div>
  );
}

export default App;

