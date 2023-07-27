import React, { Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Loader from "./Loader";
import { AnimationMixer } from "three";

let mixer = null;

const Alien = () => {
  const gltf = useGLTF("./alien/scene.gltf");

  useEffect(() => {
    const model = gltf.scene;
    const animations = gltf.animations;

    if (model && animations && mixer === null) {
      mixer = new AnimationMixer(model);

      const action = mixer.clipAction(animations[0]);
      action.play();
    }
  }, [gltf]);

  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={gltf.scene}
        scale={5}
        position={[0.6, -3, 0.08]}
        // rotation={[-0.3, -0.5, 0]}
      />
    </mesh>
  );
};

const AlienCanvas = () => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[5, 10, 5]} castShadow />
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Alien />
      </Suspense>
    </Canvas>
  );
};

export default AlienCanvas;
