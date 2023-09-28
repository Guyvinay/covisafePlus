import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './css/footer.css'
import "./index.css";
import Main from './components/Main'
import Login from './components/Login'

function App({ zoom: [zoom, setZoom] }) {
  return (
    <div>
      <Nav zoom={[zoom, setZoom]} />
      <Main />
      <Footer />
    </div>
  );
}

export default App