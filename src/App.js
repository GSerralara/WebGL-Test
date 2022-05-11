import './styles/App.css';
import { Canvas} from '@react-three/fiber'

import Box from './components/Box.jsx'

function App() {
  
  return (
    <div id="canvas-container">
      <Canvas>
          <mesh>
            <Box position={[-1.2, 0, 0]} />
            <meshPhongMaterial />
          </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
            <Box position={[1.2, 0, 0]} />
            <meshPhongMaterial />
        </mesh>
        
      </Canvas>
    </div>
  );
}

export default App;
