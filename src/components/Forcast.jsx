
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const baseurl=import.meta.env.VITE_BASE_URL
const Forcast = ({ lat, lon }) => {
  const [data, setData] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [dates, setDates] = useState([]);
const token =localStorage.getItem('token')

  const fetchData = async () => {
    try {
    const response = await axios.get(`${baseurl}/weather/forcast?lat=${lat}&lon=${lon}`);
      const forecastData = response.data.data;
      setData(forecastData);
      setDates(Object.keys(forecastData));
      setSelectedDate(Object.keys(forecastData)[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full flex justify-center mb-4"> 
        <div className="w-full max-w-xs">
          <label className="block text-white font-bold text-2xl mb-2">Select Date:</label>
          <select id="date-select" className="block w-full px-5 py-2 bg-violet-700 text-white font-bold rounded-lg" value={selectedDate} onChange={handleDateChange}>
            {dates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedDate &&
          data[selectedDate].map((entry, index) => (
            <div key={index} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg shadow-xl p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold mb-2 text-white truncate">{entry.dt_txt}</h2>
              <div className="mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <span className="text-3xl sm:text-4xl font-bold text-white">{entry.main.temp}K</span>
                <span className="text-xs sm:text-sm text-white opacity-75">Feels like: {entry.main.feels_like}K</span>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-sm sm:text-base text-white capitalize">{entry.weather[0].description}</p>
                <p className="text-xs sm:text-sm text-white opacity-75">Humidity: {entry.main.humidity}%</p>
                <p className="text-xs sm:text-sm text-white opacity-75">Wind: {entry.wind.speed} m/s</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forcast;
