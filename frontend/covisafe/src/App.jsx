import { useState } from 'react'
import Nav from './components/nav'
import Footer from './components/Footer'
import './css/footer.css'
import Main from './components/Main'

function App() {
  const [zoom, setZoom] = useState(100); 
  return (
    <div style={{ zoom: `${zoom}%` }}>
      <Nav zoom={[zoom, setZoom]} />
      <Main />
      <Footer />
    </div>
  );
}

export default App