import './styles/App.css';
import { Canvas } from '@react-three/fiber'
import Planet from './components/planet';
import SkyBox  from './components/SkyBox';
import Stars from './components/stars';
import HUD from './components/HUD';
import Camera from './components/Camara';
import { useState } from 'react';
function App() {
  const [clicked, setClicked] = useState(false);
  const initTravel = () =>{
    setClicked(true);
    console.log('clicked');
  };
  return (
    <div id="canvas-container">
      <Canvas>
        <Planet position={[2, 2, 0]} name='mars'/>
        <Planet position={[-8, -8, 0]} name='earth'/>
        <SkyBox/>
        <Stars/>
        <Camera position={[-8, -8, 15]} lookAt={[2, 2, 0]} init={clicked}/>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <HUD initTravel={initTravel}/>
    </div>
  );
}

export default App;
