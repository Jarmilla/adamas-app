import React, { useState, useEffect } from "react";
import { geoDistance, formatCoords, subsribeToPosition } from "./utils/geoDistance";
import WeatherIcon from "./utils/icons";
import { WiHumidity, WiRain, WiThermometer, WiStrongWind } from "weather-icons-react";

function Home() {
  //Gyöngyös, Pipishegyi repülőtér
  const coordinates = {
    latitude: 47.814303,
    longitude: 19.9784174,
  };
  const APIkey = "23c16eed06c02fd60c74cdaf0b3558f3";
  const daysOfWeek = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
  const smallIconSize = "1.5em";
  const [weather, setWeather] = useState(null);
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
          <div className="weather-display">
            <div>
              <WeatherIcon code={day.weather[0].icon} size="5rem" alt={day.weather[0].description} />
              <p>{day.weather[0].description}</p>
            </div>
            <div>
              <p>
                <WiThermometer size={smallIconSize} /> {day.temp.min.toFixed(0)} - {day.temp.max.toFixed(0)} °C{" "}
              </p>
              <p>
                <WiStrongWind size={smallIconSize} /> {day.wind_speed} m/s
              </p>
              <p>
                <WiRain size={smallIconSize} /> {day.rain ? day.rain.toFixed(2) : (0).toFixed(2)} mm
              </p>
              <p>
                <WiHumidity size={smallIconSize} /> {day.humidity.toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
