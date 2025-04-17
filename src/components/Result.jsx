import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";


function Result(){
    const {result,ename } = useContext(WeatherContext);

    return(
        <div>
{            result=="start"?<p className="text-3xl ">Provide a city name </p>:<p>City not found</p>
}        </div>
    )
}

export default Result