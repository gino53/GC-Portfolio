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
      new TextureLoader().load('./img/websites/9.png'),

    ];
  }, []);

  const objectsData = [
    { position: [4.5, 15.5, -18], rotation: [Math.PI / -2, Math.PI, 4] },
    { position: [4, 15.5, -23], rotation: [Math.PI / -2, Math.PI, 4] },
    { position: [3.5, 15.5, -28], rotation: [Math.PI / -2, Math.PI, 4] },
    { position: [3, 15.5, -33], rotation: [Math.PI / -2, Math.PI, 4] },
    { position: [-3, 15.5, -18], rotation: [Math.PI / -2, Math.PI, -4] },
    { position: [-3, 15.5, -23], rotation: [Math.PI / -2, Math.PI, -4] },
    { position: [-3, 15.5, -28], rotation: [Math.PI / -2, Math.PI, -4] },
    { position: [-3, 15.5, -33], rotation: [Math.PI / -2, Math.PI, -4] },
    { position: [0, 15.5, -35], rotation: [Math.PI / -2, Math.PI, Math.PI] }
  ];

  return (
    <>
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#ffb9f6'} rotation={[0, -4, 0]} position={[4.5, 15.5, -18]} />
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#7b70f5'} rotation={[0, -4, 0]} position={[4, 15.5, -23]} />
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#f1f1f1'} rotation={[0, -4, 0]} position={[3.5, 15.5, -28]} />
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#a7a7a7'} rotation={[0, -4, 0]} position={[3, 15.5, -33]} />
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#10b284'} rotation={[0, 4, 0]} position={[-3, 15.5, -18]} />
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#6486ff'} rotation={[0, 4, 0]} position={[-3, 15.5, -23]} />
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#936b43'} rotation={[0, 4, 0]} position={[-3, 15.5, -28]} />
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#ffce8f'} rotation={[0, 4, 0]} position={[-3, 15.5, -33]} />
      <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#8e60a7'} rotation={[0, Math.PI, 0]} position={[0, 15.5, -35]} />

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
