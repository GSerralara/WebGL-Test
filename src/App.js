import './styles/App.css';
import { Canvas} from '@react-three/fiber'

//import Box from './components/Box.jsx'
import Planet from './components/planet';
import SkyBox  from './components/SkyBox';
import Stars from './components/stars';
import HUD from './components/HUD';
function App() {
  
  return (
    <div id="canvas-container">
      <Canvas>
        <Planet position={[-3, 0, 0]}/>
        <Planet position={[3, 0, 0]}/>
        <SkyBox/>
        <Stars/>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <HUD/>
    </div>
  );
}

export default App;
