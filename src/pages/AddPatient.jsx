import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';


export default function AddPatient() {
    const navigate = useNavigate();

    // Patient fields ke liye state (Djnago model fields ke hisab se )
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        gender:'Male',
        blood_group:'',
        phone:'',
        address:'',

    });
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);

    // Input change hone par state update karna
    const handleChange =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // form submit hone par POST request bhejna
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        API.post('patients/', formData)
          .then((response) => {
            setLoading(false);
            alert('Patient successfully added! 🎉');

            // success hone ke bad user ko vapas  Patients List par bhej dena
            navigation('/patients');
          })
          .catch((err) => {
            console.error("Error adding patient:", err);
            setError('Patient add krne mein kuch dikkat aayi hai. kripya details check kre.');
            serLoading(false);
          });
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    ➕ Add New Patient 
                </h2>

                    {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Patient Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter patient full name"
                            /> 
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                 <label className="block text-gray-700 font-medium mb-1">Age</label>
                                 <input
                                   type="number"
                                   name="age"
                                   value={formData.age}
                                   onChange={handleChange}
                                   required
                                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   placeholder="Age"
                                /> 
                            </div>
                            <div>
                                 <label className="block text-gray-700 font-medium mb-1">Gender</label>
                                  <select
                                    
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  >  
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>

                                  </select> 
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-grey-700 font-medium mb-1">Blood Group</label>
                                     <input
                                       type="text"
                                       name="blood_group"
                                       value={formData.blood_group}
                                       onChange={handleChange}
                                       
                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="e.g. O+, B+"
                                     /> 
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium m-1">Phone Number</label>
                                    <input
                                      type="text"
                                      name="phone"
                                      value={formData.phone}
                                      onChange={handleChange}
                                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Phone number"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium m-1">Address</label>
                                    <textarea
                                     
                                      name="address"
                                      value={formData.address}
                                      onChange={handleChange}
                                      rows="2"
                                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Patient Address"
                                    ></textarea>
                             </div>
                             <button
                               type="submit"
                               disabled={loading}
                               className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
                             >
                                {loading ? 'Saving Patient...' :'Submit Patient Details'}  
                             </button>
                        </form>
                     </div>

                </div>                
                                 



    );
}