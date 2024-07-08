import React, { useEffect, useState } from 'react';
import axios from 'axios';
const baseurl=import.meta.env.VITE_BASE_URL
const FavouriteCityModal = ({ setModal,setData}) => {
  const token = localStorage.getItem('token');
  const [data, setDatas] = useState(null);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseurl}/weather/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setDatas(response.data.favoriteCity);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addData = async () => {
    try {
      const response = await axios.post(
        `${baseurl}/weather/favorites`,
        { name: input },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick=async(city)=>{
  setData(city)
  setModal(false)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white w-full md:max-w-3xl mx-auto rounded-md shadow-lg z-50 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center m-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search..."
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-4"
            />
            <button
              className="ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none"
              onClick={addData}
            >
              <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add
            </button>
          </div>

          <button
            className="text-gray-500 hover:text-gray-800 p-2 rounded-full focus:outline-none"
            onClick={() => setModal(false)}
            aria-label="Close modal"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 1.414-1.414L10 8.586z"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 overflow-y-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.map((city) => (
              <div key={city.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="px-6 py-4">
                  <button 
                  onClick={()=>handleClick(city.name)}
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    {city.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCityModal;
