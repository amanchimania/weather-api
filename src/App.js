import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import React, { useState } from "react";
import { Container } from 'react-bootstrap';


function App() {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = useState({});
  const [flag,setFlag]=useState(false)
  const fetchCityWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`)
      .then((response) => response.json())
      .then((result) => {
        setCityWeather(result)
        setFlag(true)
        console.log(result);
      });
  }
  return (
    <Container >
      <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather} />
      <br />
      <br />
      {flag && <CityWeather cityWeather={cityWeather} />}

    </Container>
    
  );
}

export default App;
