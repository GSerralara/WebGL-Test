import { useRef, useLayoutEffect} from 'react'
import { useFrame,useThree } from '@react-three/fiber'
function Camera(props) {
    const camera = useRef();
    const set = useThree(({ set }) => set)
    useFrame(() => camera.current.updateMatrixWorld())
    useLayoutEffect(() => {
        set({ camera: camera.current })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return (
      <perspectiveCamera
        ref={camera}
        fov={75}
        near={0.1}
        far={100}
        {...props}
      >
      </perspectiveCamera>
    );
};
export default Camera;