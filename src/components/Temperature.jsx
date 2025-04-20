import { useContext } from "react"
import { WeatherContext } from "./WeatherContext"
import sunny from "../assets/images/sunny.png"
import cloudy from "../assets/images/cloudy.png"



function Temperature(){
    const{temperature,ecity}=useContext(WeatherContext)

    return(
        <div>
            {
                temperature>25?(<img className="w-44 h-fit ml-[50%] transform -translate-x-1/2" src={sunny}></img>):<img className="w-44 ml-[50%] transform -translate-x-1/2" src={cloudy}></img>
            }
            <p className="text-3xl font-medium">{Math.round(temperature)}°C</p>
            <h1 className="text-yellow-500 text-4xl font-bold my-1">{(ecity).toUpperCase()}</h1>

        </div>
    )
}

export default Temperature