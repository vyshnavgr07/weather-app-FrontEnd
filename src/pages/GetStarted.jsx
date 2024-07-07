import React from 'react';

const GetStarted = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-blue-500 min-h-screen h-screen'>
    <div className=' flex flex-col items-center justify-start'>
      <div className="mt-5  w-full ">
        <form className="max-w-md mx-auto bg-transparent"> {/* Ensure form has bg-transparent */}
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
   

    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-center">
      Kozhikode, IN
    </div>
    <div className="text-gray-700 dark:text-gray-400 text-base">
      <p><strong>Temperature:</strong> 301.8°K</p>
      <p><strong>Feels Like:</strong> 306.36°K</p>
      <p><strong>Min Temp:</strong> 301.8°K</p>
      <p><strong>Max Temp:</strong> 301.8°K</p>
      <p><strong>Pressure:</strong> 1007 hPa</p>
      <p><strong>Humidity:</strong> 77%</p>
      <p><strong>Wind Speed:</strong> 1.8 m/s</p>
      <p><strong>Sunrise:</strong> 6:30 AM</p>
      <p><strong>Sunset:</strong> 6:30 PM</p>
      <p><strong>Date & Time:</strong> 7/7/2024, 4:30 PM</p>
    </div>
    <div className="pt-4 text-gray-700 dark:text-gray-400 text-base">
      <strong>Clouds:</strong> Overcast clouds
    </div>
  </div>
</div>


    </div>
  );
}

export default GetStarted;
