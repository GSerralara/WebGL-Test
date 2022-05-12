import { useThree } from '@react-three/fiber'
import {Color} from "three";
function SkyBox() {
  const { scene } = useThree();
  scene.background = new Color("rgb(70, 75, 80)");
  return null;
}
export default SkyBox;