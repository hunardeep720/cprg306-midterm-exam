"use client";
import React, { useEffect, useState } from "react";

const APICallExam = () => {
  const [URL, setURL] = useState('https://webdev2-class-demo.vercel.app/api/sampleReqs/');
  const [passcode, setPasscode] = useState('ehen2rfow');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}${passcode}`); 
        const data = await response.json(); 
      } catch (error) {
        console.error("Error fetching data:", error);
            }
    };

    fetchData();

  }, []);

  const handleSubmit = () => {
    window.open(`${URL}${passcode}`); 
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <button onClick={handleSubmit} className="bg-red-100 p-2 rounded-md border border-red-500">
          Submit
        </button>
      </div>      
    </div>
  );
};

export default APICallExam;
