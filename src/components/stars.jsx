import { useRef, useMemo } from 'react'
//import { useRender } from 'react-three-fiber'
import { useFrame } from '@react-three/fiber'
import {SphereBufferGeometry, MeshBasicMaterial, Color} from "three";
function Stars() {
    let group = useRef()
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        group.current.rotation.y = a/100;
        
    });
      
    const [geo, mat, coords] = useMemo(() => {
      const geo = new SphereBufferGeometry(1, 10, 10)
      const mat = new MeshBasicMaterial({ color: new Color('lightpink') })
      const coords = new Array(1000).fill().map((i) => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
      return [geo, mat, coords]
    }, [])
  
    return (
      <group ref={group}>
        {coords.map(([p1, p2, p3], i) => (
          <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
        ))}
      </group>
    )
  }
export default Stars;