import { createContext,useState } from "react"
 
const WeatherContext=createContext()

function WeatherContextProvider(data){

	const [ecity, setEcity] = useState("");
	const [temperature, setTemperature] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpd, setWindSpd] = useState("");
	const[result,setResult]=useState("start")
  


	return(
		<WeatherContext.Provider value={{ecity,setEcity,latitude,setLatitude,temperature,setTemperature,longitude,setlongitude,windSpd, setWindSpd,humidity, setHumidity,result,setResult}}>
			{data.children}
			</WeatherContext.Provider>
	)
}

export default WeatherContextProvider

export {WeatherContext}