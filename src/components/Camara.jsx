import { useRef, useLayoutEffect} from 'react'
import { useFrame,useThree } from '@react-three/fiber'
import { Vector3,Euler } from 'three';
function Camera(props) {
    const camera = useRef();
    const set = useThree(({ set }) => set)
    useFrame((state, delta) => {
      if(props.init && camera.current.position.distanceTo(new Vector3(2,2,0)) > 1.4 ){
        camera.current.position.lerp(new Vector3(2, 2, 0), 0.1)
        camera.current.setRotationFromEuler(new Euler(-0.5, -0.5, 0))
      }
      camera.current.updateMatrixWorld()
    });
    useLayoutEffect(() => {
        set({ camera: camera.current })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return (
      <perspectiveCamera
        ref={camera}
        fov={75}
        near={0.1}
        far={1000}
        position={props.position}
        lookAt={props.lookAt}
      >
      </perspectiveCamera>
    );
};
export default Camera;