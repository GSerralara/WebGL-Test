import './styles/App.css';
import { Canvas} from '@react-three/fiber'

import Planet from './components/planet';
import SkyBox  from './components/SkyBox';
import Stars from './components/stars';
import HUD from './components/HUD';
import Camera from './components/Camara';
function App() {
  
  return (
    <div id="canvas-container">
      <Canvas>
        <Planet position={[2, 2, 0]} name='mars'/>
        <Planet position={[-8, 0, 0]} name='earth'/>
        <SkyBox/>
        <Stars/>
        <Camera position={[0, 0, 10]} lookAt={[-8, 0, 0]}/>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <HUD/>
    </div>
  );
}

export default App;
