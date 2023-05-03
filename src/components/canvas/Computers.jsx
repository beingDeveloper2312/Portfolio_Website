import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Float } from '@react-three/drei'
import CanvasLoader from '../Loader';



const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    < Float speed={1.95} rotationIntensity={0} floatIntensity={1.75}>
    <mesh>
      <hemisphereLight intensity={1}
      groundColor="brown" />
      <pointLight intensity={0.2}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle = {0.12}
        penumbra = {1}
        intensity = {1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object = {computer.scene}
        scale = {isMobile ? 2.6 : 4.4}
        position = {isMobile ? [4.9, -3.2, 1] : [2,-3.8, 1]}
        rotation =  {isMobile ? [-0.0, 1.2, -0.0] : [0,0,0]}
      />
    </mesh>
    </Float>
  )
}


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      // console.log(isMobile);
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);
  return(
    <Canvas
       frameloop='always'
       shadows
       camera={{position: [20,3,5], fov: 25}}
       gl = {{ preserveDrawingBuffer: true }}
    >
       <Suspense fallback={<CanvasLoader/>}>
         <OrbitControls 
          enableZoom={false}
          
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
         />
          <Computers isMobile={isMobile} />
       </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas