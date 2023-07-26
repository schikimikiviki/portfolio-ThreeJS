import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Square = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.5;
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1.0} position={[1, 1, 1]} />
      <mesh ref={cubeRef} castShadow receiveShadow scale={3.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#FFFFFF"
          map={decal}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const SquareCanvas = ({ icon }) => {
  return (
    <>
      <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Square imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default SquareCanvas;
