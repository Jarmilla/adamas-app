import React, { useState, useEffect } from "react";
import { geoDistance, formatCoords, subsribeToPosition } from "./utils/geoDistance";

function Home() {
  //Gyöngyös, Pipishegyi repülőtér
  const coordinates = {
    latitude: 47.814303,
    longitude: 19.9784174,
  };
  const APIkey = "23c16eed06c02fd60c74cdaf0b3558f3";
  const [weather, setWeather] = useState(null);
  const daysOfWeek = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
  const [userCoords, setUserCoords] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(subsribeToPosition(setUserCoords), []);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&exclude=minutely,hourly&units=metric&lang=hu&appid=${APIkey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((err) => console.log("Error:", err));
  }, [coordinates.latitude, coordinates.longitude]);

  return (
    <div>
      <h3>Főhadiszállás</h3>
      <ul>
        <li>Koordináták: {formatCoords(coordinates)}</li>
        {userCoords ? (
          <li>
            Távolság: {geoDistance(coordinates, userCoords).toFixed(0)} m (±{userCoords.accuracy.toFixed(0)} m){" "}
          </li>
        ) : (
          ""
        )}
      </ul>

      {weather?.daily.slice(0, 3).map((day) => (
        <div key={day.dt}>
          <h3>{daysOfWeek[new Date(day.dt * 1000).getDay()]}</h3>
          <div>
            Hőmérséklet: {day.temp.min.toFixed(0)} - {day.temp.max.toFixed(0)} °C
          </div>
          <div>Szélsebesség: {day.wind_speed} m/s</div>
          <div>Csapadék: {day.rain ? day.rain.toFixed(2) : (0).toFixed(2)} mm</div>
          <div>Páratartalom: {day.humidity.toFixed(0)}%</div>

          {/* <WeatherIcon code={day.weather[0].icon} size="50px"/> */}
          <div>{day.weather[0].description}</div>
        </div>
      ))}
    </div>
  );
}
export default Home;
