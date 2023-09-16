import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';


export default function Router() {
  const [zoom, setZoom] = useState(100); 
  return (
    <div style={{ zoom: `${zoom}%` }}>
      <Routes>
        <Route path="/" element={<App zoom={[zoom, setZoom]} />} />
        <Route path="signin" element={<Login zoom={[zoom, setZoom]} />} />
        <Route path="signup" element={<Signup zoom={[zoom, setZoom]} />} />
      </Routes>
    </div>
  );
}
