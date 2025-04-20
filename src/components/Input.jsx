import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import axios from "axios";

function Input() {
  const { ecity, setEcity, setTemperature,setlongitude,setWindSpd,setHumidity,setLatitude,result,setResult } =
    useContext(WeatherContext);
    console.log(result)

  const handleCityInput = (e) => {
    setEcity(e.target.value);
  };

  const getWeather = () => {
    var weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${ecity}&appid=07f1de2c03aeac2e930ac9415bcb7f82`
    );
    weatherData
      .then(function (success) {
        setTemperature(success.data.main.temp-273);
        setLatitude(success.data.coord.lat)
        setlongitude(success.data.coord.lon)
        setHumidity(success.data.main.humidity)
        setWindSpd(success.data.wind.speed)
        setResult(true)
      })
      .catch(function (errmsg) {
        setResult(false)
        console.log("Provided country name is invalid");
      });
  };

  return (
    <div className="flex  bg-transparent justify-between  border-blue-600 border-[4px] rounded-full  " >
      
        <input
          type="text"
          placeholder="City name"
          className=" px-6  bg-transparent text-xl text-blue-800 font-medium placeholder:text-blue-800 placeholder:font-bold placeholder:text-xl focus:outline-none"
          value={ecity}
          onChange={handleCityInput}
        >
         
        </input>
        <button
          className=" p-1 text-blue-800 text-3xl px-4"
          onClick={getWeather} 

        >
         ⌕
        </button>
       
       
      
    </div>
  );
}

export default Input;
