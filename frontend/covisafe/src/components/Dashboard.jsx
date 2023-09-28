import React from 'react'
import Footer from './Footer';
import Nav from './Nav';

export default function Dashboard({ zoom: [zoom, setZoom] }) {
  return (
    <>
      <Nav zoom={[zoom, setZoom]} />
      <Footer />
    </>
  );
}
