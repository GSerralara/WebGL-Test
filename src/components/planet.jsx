
import earthMap from './../textures/mars_color.jpg'
import earthNormalMap from './../textures/mars_normal.jpg'


import { Suspense, Fragment } from 'react'
import { useLoader} from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader'


function Planet(props) {

    
    const [colorMap, normalMap] = useLoader(TextureLoader, [
    earthMap,
    earthNormalMap
    ])
    return(
        <Fragment>
            <Suspense fallback={null}>
                <ambientLight intensity={0.2} />
                <directionalLight />
                <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial map={colorMap}
                    normalMap={normalMap} />
                </mesh>
            </Suspense>
        </Fragment>
    );
}

export default Planet;