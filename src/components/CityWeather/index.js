import React from "react";
import { Card } from "react-bootstrap";
const CityWeather=({cityWeather})=>{
  
return(
    <div>
      {/* { cityWeather.name}
      <br/> */}
      {/* {cityWeather.main.feels_like} */}
      {/* {cityWeather.sys.sunrise} */}
      <div style={{display:"flex", textAlign:"center", justifyContent:"center"}}>
      <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>{cityWeather.name?<b>{cityWeather.name}</b>:<b className="text-danger">"error city not found"</b>}</Card.Header>
    <Card.Body>
      <Card.Title>Temperature is {cityWeather.main.temp} F</Card.Title>
      <Card.Text>
        Humidity {cityWeather.main.humidity} <br/>
        Max-Temp {cityWeather.main.temp_max} <br/>
        Min-Temp {cityWeather.main.temp_min} <br/>


      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  </div>


    </div>
);
}
export default CityWeather;