import React, { useState, useEffect } from 'react' ;
import API from '../api'; // jo api.js file bnayi h use import kiya

export default function Patients() {
  const [patients, setPatients]= useState([]);
  const[loading, setLoading]= useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Backend se patients ka data fetch krna
    API.get('patients-v2/') // Apne DRF URL ke hisab se endpoint yahan likhein
    .then((response) => {
      console.log("Backend Response:", response.data);
      setPatients(response.data.results);
      setLoading(false);
    })
    .catch((err) => {
      console.error("API error", err);
      setError("Backend se data laane me kuch dikkat aayi hai.");
      setLoading(false);
    });
  },[]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">


        {/* Header Section */}
        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">
          Hospital Management System
          </h1>
          <span className="bg-screen-500 text-xs px-3 py-1 rounded-full font-semibold">
               Live Backend Connected
          </span>
        </div>

         {/* Content Section */}
         <div className="p-6">
           <h2 className="text-xl font-semibold text-gray-800 mb-4">Patients List</h2>
            

            {loading && <p className="text-blue-600 animate-pulse">Loading data from Render backend..</p>}
            {error && <p className="text-red-500 font-medium">{error}</p>}

            {!loading && !error && (
              <div>
                {patients.length === 0 ? (
                  <div className="text-center py-10 bg-gray-50 rounded-lg border-dashed border-gray-300">
                   <p className="text-gray-500">Abhi Database me koi patient registered nahi hai</p>
                   <p className="text-sm text-gray-400 mt-1">Django Admin Panel se ya api ke through kuch test patients add krke dekhein ! </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                          <th className="p-3">ID</th>
                          <th className="p-3">Name</th>
                          <th className="p-3">Age</th>
                          <th className="p-3">Gender</th>
                          <th className="p-3">Blood Group</th>
                          <th className="p-3">Phone</th>
                          <th className="p-3">Address</th>
                        </tr>  
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {patients.map((patient) => (
                          <tr key={patient.id} className="hover:bg-gray-50">
                            <td className="p-3">{patient.id}</td>
                            <td className="p-3 font-medium text-gray-900">{patient.name}</td>
                            <td className="p-3">{patient.age}</td>
                            <td className="p-3">{patient.gender}</td>
                            <td className="p-3">{patient.blood_group}</td>
                            <td className="p-3">{patient.phone}</td>
                            <td className="p-3">{patient.address}</td>
                          </tr>  
                      ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div> 

      </div>
    </div>
  );
}             
