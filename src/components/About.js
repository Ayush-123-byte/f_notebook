// components/About.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate = useNavigate();
  useEffect(() => {
   if(localStorage.getItem('token')){
    navigate("/about")
   }
   else{
    navigate("/login")
  }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">About the Notebook App</h1>
      <p className="text-gray-700">
        Welcome to the Notebook App, your go-to place for organizing and managing your notes effortlessly.
      </p>
      <p className="text-gray-700 mt-4">
        Our app allows you to perform CRUD operations on your notes, giving you the flexibility to create, read,
        update, and delete them as needed.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
      <ul className="list-disc pl-6">
        <li className="text-gray-700">Create new notes with ease.</li>
        <li className="text-gray-700">View and organize your notes seamlessly.</li>
        <li className="text-gray-700">Update existing notes to keep information current.</li>
        <li className="text-gray-700">Delete notes you no longer need.</li>
      </ul>
      <p className="text-gray-700 mt-8">
        Our goal is to provide a simple and intuitive platform for managing your notes, whether it's for work,
        study, or personal use. If you have any feedback or questions, feel free to reach out to us.
      </p>
    </div>
  );
};

export default About;
