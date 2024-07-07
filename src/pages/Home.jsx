import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import Forcast from '../components/Forcast';
import Navbar from '../components/Navbar';


const Home = () => {
  const navigate = useNavigate();
const [data,setData]=useState('delhi')
const [weatherData,setWeatherData]=useState('')
const[sunrise,setSunrise]=useState(null)
const[sunset,setSunset]=useState(null)


const handleApi=async()=>{
  try {
    const respose=await axios.get(`http://localhost:3001/api/user/weather/current?city=${data}`)
 
    setWeatherData(respose.data.data)
    setSunrise(convertUnixToTime(respose.data.data?.sys?.sunrise));
  setSunset(convertUnixToTime(respose.data.data?.sys?.sunset));
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
handleApi()
},[])




const handleClick=async(e)=>{
  e.preventDefault()
  console.log(data,"data");
handleApi()
}

const convertUnixToTime = (unixTimestamp) => {
  if (!unixTimestamp) return ''; // Handle null or undefined case
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Formats time
};

console.log(weatherData,'respooo');


  return (
    <> 
<Navbar/>
    <div className='h-screen w-full flex flex-col lg:flex-row bg-gradient-to-r from-blue-600 to-violet-600'>

<div className="lg:w-1/4 mt-2 lg:mt-24 flex items-center justify-center m-5">
  <div className="w-full h-full mx-auto rounded-lg overflow-hidden shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
    <div className="px-6 py-8">
      <form className="mb-4">
        <div className="flex">
          <input
            type="text"
            id="search"
            className="bg-gray-300 border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-lg p-3 flex-1"
            placeholder="Enter city name..."
            onChange={(e) => setData(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-lg px-4 py-2 transition duration-200 ease-in-out"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </form>
      
      {weatherData ? (
        <div className="font-bold text-2xl lg:text-3xl mb-4 text-center">
          <p className="text-gray-900 dark:text-white text-8xl">
            {weatherData?.main?.temp !== undefined ? (weatherData.main.temp - 273.15).toFixed(2) : 'Data not available'}°C
          </p>
          <p className="text-gray-900 dark:text-white">{weatherData?.name}</p>
        </div>
      ) : (
        <div className="font-bold text-2xl lg:text-3xl mb-4 text-center">
          <p className="text-gray-900 dark:text-white text-8xl">Data</p>
          <p className="text-gray-900 dark:text-white">not available</p>
        </div>
      )}

      {weatherData ? (
        <div className="pt-4 text-white text-3xl font-bold">
          <strong>Weather:</strong> {weatherData?.weather[0]?.description}
        </div>
      ) : (
        <div className="pt-4 text-white text-3xl font-bold">
          <strong>Weather:</strong> no data found
        </div>
      )}

      <div className="text-gray-700 dark:text-gray-400 text-base mt-4">
        <p className="text-black dark:text-white"><strong>Feels Like:</strong> {weatherData?.main?.feels_like - 273.15}°C</p>
        <p className="text-black dark:text-white"><strong>Min Temp:</strong> {(weatherData?.main?.temp_min - 273.15).toFixed(2)}°C</p>
        <p className="text-black dark:text-white"><strong>Max Temp:</strong> {(weatherData?.main?.temp_max - 273.15).toFixed(2)}°C</p>
        <p className="text-black dark:text-white"><strong>Pressure:</strong> {weatherData?.main?.pressure} hPa</p>
        <p className="text-black dark:text-white"><strong>Humidity:</strong> {weatherData?.main?.humidity}%</p>
        <p className="text-black dark:text-white"><strong>Wind Speed:</strong> {weatherData?.wind?.speed} m/s</p>
        <p className="text-black dark:text-white"><strong>Sunrise:</strong> {sunrise}</p>
        <p className="text-black dark:text-white"><strong>Sunset:</strong> {sunset}</p>
      </div>
    </div>
  </div>
</div>

<div className='w-3/4 mt-2 lg:mt-24  '>
<Forcast/>
</div>


    </div>
    </>
  );
}

export default Home;
