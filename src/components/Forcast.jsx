import React from 'react'

const Forcast = () => {

//   const temp = Math.round(data.main.temp - 273.15);
//   const feelsLike = Math.round(data.main.feels_like - 273.15);

  return (
<div className='container mx-auto px-4 py-8'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
    {[...Array(5)].map((_, index) => (
      <div key={index} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg shadow-xl p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-white truncate">data.dt_txt</h2>
        <div className="mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <span className="text-3xl sm:text-4xl font-bold text-white">temp°C</span>
          <span className="text-xs sm:text-sm text-white opacity-75">Feels like: feelsLike°C</span>
        </div>
        <div className="space-y-1">
          <p className="font-medium text-sm sm:text-base text-white capitalize">data.weather[0].description</p>
          <p className="text-xs sm:text-sm text-white opacity-75">Humidity: data.main.humidity%</p>
          <p className="text-xs sm:text-sm text-white opacity-75">Wind: data.wind.speed m/s</p>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Forcast