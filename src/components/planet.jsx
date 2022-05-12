
import earthMap from './../textures/earth_map.jpg'
import earthNormalMap from './../textures/earth_normal.jpg'

import marsMap from './../textures/mars_color.jpg'
import marsNormalMap from './../textures/mars_normal.jpg'

import { Suspense, Fragment, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader'


function Planet(props) {
    const mesh = useRef();
    const color = props.name === 'earth' ? earthMap : marsMap;
    const normal = props.name === 'earth' ? earthNormalMap : marsNormalMap;
    useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
    const [colorMap, normalMap] = useLoader(TextureLoader, [
    color,
    normal
    ])
    return(
        <Fragment>
            <Suspense fallback={null}>
                <ambientLight intensity={0.2} />
                <directionalLight />
                <mesh {...props} ref={mesh}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial map={colorMap}
                    normalMap={normalMap} />
                </mesh>
            </Suspense>
        </Fragment>
    );
}

export default Planet;