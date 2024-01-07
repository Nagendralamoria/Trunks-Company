import { useEffect, useRef} from 'react';
import './App.css'
import PoloGifSection from '../components/polo-gif-section/PoloGifSection';
import RambaghLandingSection from '../components/rambagh-landing-section/RambaghLandingSection';
import TreasuringSection from '../components/treasuring-section/TreasuringSection';
import GlassHandleSection from '../components/glass-handle-section/GlassHandleSection';
import TrunkSection from '../components/trunk-section/TrunkSection';
import HandleSection from '../components/handle-section/HandleSection';
import EmblemSection from '../components/emblem-section/EmblemSection';

function App() {

  const appRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (window.innerWidth > 768) {
        appRef.current.scrollLeft += event.deltaY;
      } else {
        appRef.current.scrollTop += event.deltaY;
      }
    };
    const appElement = appRef.current;
    appElement.addEventListener('wheel', handleWheel);

    return () => {
      appElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='landingPage'  ref={appRef}>
     <RambaghLandingSection/>
      <TreasuringSection/>
      <PoloGifSection />
      <EmblemSection/>
      <GlassHandleSection />
      <HandleSection/>
      <TrunkSection />
      
    </div>
  )
}

export default App
