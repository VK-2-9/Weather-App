import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import Temperature from "./Temperature";
import LatLong from "./LatLong";
import HumWind from "./HumWind";
import Result from "./Result";

function Output() {
  const {result } = useContext(WeatherContext);


  return (
    <div className="justify-center">
    
     {
        result===true?<div className="flex justify-between flex-col">
        <Temperature />
        <LatLong />
        <HumWind />
      </div>:<Result/>
      }
    </div>
  );
}

export default Output;
