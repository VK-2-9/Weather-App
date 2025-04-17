import { useState } from "react";
import axios from "axios";
import WeatherContext from "./components/WeatherContext"
import Input from "./components/Input";
import Output from "./components/Output";


function App() {
  

  
  return (
    <div > 
        <WeatherContext>
        <div className="flex flex-col justify-center  h-[100vh] w-fit ml-[50%] transform -translate-x-1/2"> 
          <Input/>
          <Output/>
          </div>
        </WeatherContext>
     
    </div>
  );
}

export default App;
