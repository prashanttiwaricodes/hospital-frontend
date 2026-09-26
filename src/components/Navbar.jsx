import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
         <h1 className="text-xl font-bold">Hospital Management System</h1>
         <div className="space-x-6">
           <Link to="/" className="hover:underline font-medium">Home /Dashboard</Link>
           <Link to="/patients" className="hover:underline font-medium">Patients List</Link>
           
         </div>
        </nav>

    );
}