import { useThree } from '@react-three/fiber'
import {Color} from "three";
// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  scene.background = new Color("rgb(70, 75, 80)");
  return null;
}
export default SkyBox;