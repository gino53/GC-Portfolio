import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a as three } from "@react-spring/three";
import { TextureLoader } from "three";

export default function Mac({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mac-draco.glb");

  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("./img/Linkedin.png");

  return (
    <group ref={group} {...props} dispose={null} >
      <group position={[0, 15.5, -16]} scale={0.3} rotation={[Math.PI / -2, Math.PI, Math.PI]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube008"].geometry}
        />
        <mesh
          material={materials["matte.001"]}
          geometry={nodes["Cube008_1"].geometry}
        />
        <mesh
          material={materials["screen.001"]}
          geometry={nodes["Cube008_2"].geometry}
          rotation={[0, Math.PI, 0]}
        >
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
    </group>
  );
}
