import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import Loader from "./Loader";

const Alien = () => {
  const gltf = useGLTF("./alien/scene.gltf");
  const { nodes, animations } = gltf;
  const { actions } = useAnimations(animations, nodes);

  // Play the animation on mount
  React.useEffect(() => {
    actions && actions["mixamo.com"].play().setLoop(THREE.LoopRepeat);
  }, [actions]);

  return <primitive object={gltf.scene} scale={2.5} position-y={0} />;
};

const AlienCanvas = () => {
  return (
    <Canvas
      shadows
      //   frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[5, 10, 5]} castShadow />
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Alien />
      </Suspense>
    </Canvas>
  );
};

export default AlienCanvas;
