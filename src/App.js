import './styles/App.css';
import { Canvas} from '@react-three/fiber'

//import Box from './components/Box.jsx'
import Planet from './components/planet';

function App() {
  
  return (
    <div id="canvas-container">
      <Canvas>
        <Planet/>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}

export default App;
