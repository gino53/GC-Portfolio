import * as THREE from "three";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, OrbitControls, Text3D, useMatcapTexture } from "@react-three/drei";

const Logo = () => {
  const TextMesh = () => {
    const [matcapTexture] = useMatcapTexture('C99A8B_491B0E_6E4136_8A4D28', 256);
    const material = React.useMemo(() => new THREE.MeshMatcapMaterial(), []);

    useFrame(() => {
      matcapTexture.encoding = THREE.sRGBEncoding;
      matcapTexture.needsUpdate = true;
      material.matcap = matcapTexture;
      material.needsUpdate = true;
    });

    return (
      <Text3D
      material={material}
      font="./fonts/helvetiker_regular.typeface.json"
      size={2.75}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      position={[0, 0, 0]}
      >
        GC
        <OrbitControls enableRotate={false} enableZoom={false} autoRotate />
      </Text3D>

    );
  };

  return (
    <Canvas style={{ width: '100px', height: '100px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Center>
        <TextMesh />
      </Center>
    </Canvas>
  );
};

export default Logo;
