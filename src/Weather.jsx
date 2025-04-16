import { useState } from "react";
import axios from "axios";

function Weather() {
  const [ecity, setEcity] = useState("");
  const[weather,setWeather]=useState();
  const[description,setDescription]=useState();
  const[temperature,setTemperature]=useState();
  const handleCityInput = (e) => {
    setEcity(e.target.value);
  };

  const getWeather = () => {
    var weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${ecity}&appid=07f1de2c03aeac2e930ac9415bcb7f82`
    );
    weatherData
      .then(function (success) {
        setWeather(success.data.weather[0].main);
        setTemperature(success.data.main.temp);
        setDescription(success.data.weather[0].description);
        console.log(success.data)
      })
      .catch(function (errmsg) {
        console.log("Provided country name is invalid");
      });
  };

  return (
    <div className="bg-black p-14">
      <div className="bg-green-400 p-5 rounded-xl">
        <div>
          <h1 className="text-2xl font-medium">Weather Report</h1>
          <p>I can give weather report of your city</p>
          <input
            type="text"
            placeholder="City name"
            className="border rounded-md border-black p-1 my-2"
            value={ecity}
            onChange={handleCityInput}
          ></input>
          <br></br>
          <button
            className="bg-black p-1 text-white my-3 border border-black rounded-md"
            onClick={getWeather}
          >
            Get report
          </button>
        </div>

        <div className="font-medium">
          <p>Weather: {weather}</p>
          <p>Temperature: {Math.round(temperature-273.15)}°C</p>
          <p>Description:{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
