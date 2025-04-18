import { useContext } from "react"
import { WeatherContext } from "./WeatherContext"




function LatLong(){

    const{latitude,longitude}=useContext(WeatherContext)
    return(
        <div className="flex justify-center gap-10  my-5">
            <div>
            <p className="text-lg font-medium">Latitude</p>
            <p className="text-2xl font-bold text-[#3c3b3b]">{latitude}</p>
            </div>
            
            <div>
            <p className="text-lg font-medium">Longitude</p>
            <p className="text-2xl font-bold text-[#3c3b3b]">{longitude}</p>
            </div>
        </div>
    )
}

export default LatLong