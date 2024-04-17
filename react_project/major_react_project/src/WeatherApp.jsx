
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
    city:"Delhi",
    feelslike:300.1,
    temp:300.2,
    tempMin:300.2,
    humidity:41,
    weather:"haze",
    });

    let updateInfo=(newInfo) =>{
    setWeatherInfo(newInfo);
    };

    return(
<div style={{textAlign:"center"}}>
    <h2>Weather app by Deepika Jakhmola</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
</div>
    );
}