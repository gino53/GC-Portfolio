import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader, PlaneGeometry, MeshBasicMaterial } from "three";

const Mac = () => {
  const { nodes, materials } = useGLTF("/mac-draco.glb");

  const textures = useMemo(() => {
    return [
      new TextureLoader().load('./img/websites/1.png'),
      new TextureLoader().load('./img/websites/2.png'),
      new TextureLoader().load('./img/websites/3.png'),
      new TextureLoader().load('./img/websites/4.png'),
      new TextureLoader().load('./img/websites/5.png'),
      new TextureLoader().load('./img/websites/6.png'),
      new TextureLoader().load('./img/websites/7.png'),
      new TextureLoader().load('./img/websites/8.png'),
      new TextureLoader().load('./img/websites/9.png')
    ];
  }, []);

  const objectsData = [
    { position: [3, 15.5, -20], rotation: [Math.PI / -2, Math.PI, 4] },
    { position: [3, 15.5, -25], rotation: [Math.PI / -2, Math.PI, 4] },
    { position: [3, 15.5, -30], rotation: [Math.PI / -2, Math.PI, 4] },
    { position: [3, 15.5, -35], rotation: [Math.PI / -2, Math.PI, 4] },
    { position: [-3, 15.5, -20], rotation: [Math.PI / -2, Math.PI, -4] },
    { position: [-3, 15.5, -25], rotation: [Math.PI / -2, Math.PI, -4] },
    { position: [-3, 15.5, -30], rotation: [Math.PI / -2, Math.PI, -4] },
    { position: [-3, 15.5, -35], rotation: [Math.PI / -2, Math.PI, -4] }
  ];

  return (
    <>
      {objectsData.map((data, index) => (
        <group key={index} position={data.position} scale={0.3} rotation={data.rotation}>
          <mesh material={materials.aluminium} geometry={nodes["Cube008"].geometry} />
          <mesh material={materials["matte.001"]} geometry={nodes["Cube008_1"].geometry} />
          <mesh position={[0, 0, 0]} rotation={[1.575, Math.PI, Math.PI]}>
            <planeGeometry args={[8.38, 5.6]} />
            <meshBasicMaterial attach="material" map={textures[index]} />
          </mesh>
        </group>
      ))}
    </>
  );
}

export default Mac;
