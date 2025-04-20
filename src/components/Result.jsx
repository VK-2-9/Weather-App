import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";


function Result(){
    const {result,ename } = useContext(WeatherContext);

    return(
        <div>
{            result=="start"?<p ></p>:<p className="font-medium text-3xl my-7 ">City not found</p>
}        </div>
    )
}

export default Result