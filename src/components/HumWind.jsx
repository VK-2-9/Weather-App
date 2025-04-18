import { useContext } from "react"
import { WeatherContext } from "./WeatherContext"
import humidityimg from "../assets/images/humidity.png"
import windspdimg from "../assets/images/windspeed.png"


function HumWind(){
    const{humidity,windSpd}=useContext(WeatherContext)

    return(
        <div className="flex justify-center gap-36 align-middle">
            <div className="text-center">
                <img className="h-10 w-10 inline-block" src={humidityimg}></img>
                <p className="text-xl font-bold text-[#3c3b3b]">{humidity}%</p>
                <p className="text-lg font-medium">Humidity</p>
            </div>

            <div className="text-center">
                <img className="h-10 w-10 inline-block" src={windspdimg}></img>
                <p className="text-xl font-bold text-[#3c3b3b]">{windSpd} km/h</p>
                <p className="text-lg font-medium">Wind speed</p>
            </div>
        </div>
    )
}

export default HumWind