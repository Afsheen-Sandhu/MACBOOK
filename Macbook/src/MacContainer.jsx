import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MacContainer = () => {
  const model = useGLTF('./mac.glb');
  const tex = useTexture('./red.jpg');
  const meshes = useRef({});
  const scrollControls = useRef();
  const mainScrollEnabled = useRef(false); // Track main scroll state

  model.scene.traverse((e) => {
    meshes.current[e.name] = e;
  });

  meshes.current.screen.rotation.x = THREE.MathUtils.degToRad(180);

  const data = useScroll();

  useFrame(() => {
    const targetRotation = THREE.MathUtils.lerp(Math.PI, Math.PI / 2, data.offset);
    meshes.current.screen.rotation.x = targetRotation;

    // Check if laptop is fully open
    if (data.offset >= 1 && !mainScrollEnabled.current) {
      mainScrollEnabled.current = true;
      document.body.style.overflow = 'auto'; // Enable main scroll
    }
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable main scroll initially

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on component unmount
    };
  }, []);

  meshes.current.matte.material.map = tex;
  meshes.current.matte.material.map = tex;
  meshes.current.matte.material.emissiveIntensity = 0;
  meshes.current.matte.material.metalness = 0;
  meshes.current.matte.material.roughness = 1;


  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
