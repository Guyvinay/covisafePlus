import React from 'react'
import Footer from './Footer';
import Nav from './Nav';
import Profile from './Profile'

export default function Dashboard({ zoom: [zoom, setZoom] }) {
  return (
    <>
      <Nav zoom={[zoom, setZoom]} />
      <div className="w-full" style={{ minHeight: "87vh" }}>
        {/* <Profile /> */}
      </div>
      <Footer />
    </>
  );
}
