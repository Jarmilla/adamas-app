import React, { useState, useEffect } from "react";

function Home() {
  //Gyöngyös, Pipishegyi repülőtér
  const lat = 47.813778;
  const lon = 19.976766;
  const APIkey = "23c16eed06c02fd60c74cdaf0b3558f3";
  const [weather, setWeather] = useState(null);
  const daysOfWeek = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&lang=hu&appid=${APIkey}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <h3>Főhadiszállás</h3>
      <p>Koordináták</p>

      {weather ? (
        <ul>
          <li>{weather.current.temp} °C</li>
          <li>ikonkép</li>
          <li>Szélsebbesség: {weather.current.wind_speed}</li>
          <li>{weather.current.weather[0].description}</li>
        </ul>
      ) : (
        "Loading..."
      )}
      {weather?.daily.slice(0, 3).map((day) => (
        <div key={day.dt}>
          <div>{daysOfWeek[new Date(day.dt * 1000).getDay()]}</div>
          <div>
            <h3>{day.temp.day} °C</h3>
            <p>ikon</p>
          </div>
          <div>Reggel: {day.temp.morn} °C</div>
          <div>Délben: {day.temp.day} °C</div>
          <div>Este: {day.temp.eve} °C</div>
          <div>Éjszaka: {day.temp.night} °C</div>
          <div>Max: {day.temp.max} °C</div>
          <div>Min: {day.temp.min} °C</div>
          <div>{day.wind_speed}</div>
          <div>{day.rain} mm</div>

          {/* <WeatherIcon code={day.weather[0].icon} size="50px"/> */}
          <div>{day.weather[0].description}</div>
        </div>
      ))}
    </div>
  );
}
export default Home;
