import * as THREE from 'three'
import { TextureLoader } from 'three';
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Sparkles, Float, Text, useGLTF, RenderTexture, PerspectiveCamera } from '@react-three/drei'
import Mac from '../Mac';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import useGame from './stores/useGame';

THREE.ColorManagement.legacyMode = false

const Cube = ({ position, texture }) => {
    return (
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={position} castShadow receiveShadow>
                <boxGeometry />
                <meshStandardMaterial map={texture} />
            </mesh>
        </RigidBody>
    );
};

function BlockStart({ position = [0, 0, 0] }) {

    const numCubes = 14;
    const cubePositions = [];

    const textures = [
        './img/icons/html.png',
        './img/icons/css.png',
        './img/icons/sass.png',
        './img/icons/js.png',
        './img/icons/angular.png',
        './img/icons/typescript.png',
        './img/icons/nodejs.png',
        './img/icons/mongodb.png',
        './img/icons/vitejs.png',
        './img/icons/bootstrap.png',
        './img/icons/lunacy.png',
        './img/icons/canva.png',
        './img/icons/threejs.png',
        './img/icons/react.png'
    ];

    for (let i = 0; i < numCubes; i++) {
        const position = [0, i + 1, i - 1];
        cubePositions.push(position);
    }

    const tree = useGLTF("/tree.gltf");
    tree.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })
    const rock = useGLTF("/rock.gltf");
    rock.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })
    const bench = useGLTF("/bench.gltf");
    bench.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })
    const lamp = useGLTF("/lamp.gltf");
    const farm = useGLTF("/farm.gltf");
    farm.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    return <group position={position} rotation={[0, Math.PI, 0]}>
        <RigidBody type='fixed' colliders="trimesh" restitution={0.2} friction={0}>
            <primitive object={tree.scene.clone()} position={[3, 0, -1.5]} rotation={[0, 2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={tree.scene.clone()} position={[-3, 0, -1]} rotation={[0, 2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={rock.scene} position={[-3, 0, -1]} rotation={[0, 2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={rock.scene.clone()} position={[3, 0, -1.1]} rotation={[0, 2, 0]} scale={[1, 1, 1]} />
            <primitive object={bench.scene} position={[-3, 0, -4]} rotation={[0, 1, 0]} scale={[0.6, 0.6, 0.6]} />
            <primitive object={lamp.scene} position={[-2.5, 0, -5.2]} rotation={[0, 1, 0]} scale={[0.6, 0.6, 0.6]} />
            <primitive object={farm.scene} position={[0.4, -0.01, 12]} rotation={[0, 2.3, 0]} scale={[5, 5, 5]} />
        </RigidBody>

        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, 0, -1]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[1, 3, 1]} />
                <meshStandardMaterial color={"#45c421"} />
            </mesh>
        </RigidBody>

        {cubePositions.map((position, index) => (
            <Cube key={index} position={position} texture={new TextureLoader().load(textures[index])} />
        ))}

        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color={"#45c421"} />
            </mesh>
        </RigidBody>
    </group>
}

function RotateObject({ object, position, rotation, scale }) {
    useFrame(() => {
        object.rotation.y += 0.01;
    });

    return (
        <primitive object={object} position={position} rotation={rotation} scale={scale} />
    );
}

export default function Level() {
    const star = useGLTF("/star.gltf");
    const phase = useGame((state) => state.phase)
    if (phase === 'ended') {
        console.log('end');
    }

    return <>
        <Float floatIntensity={0.5} rotationIntensity={0.5}>
            <Text
                scale={0.5}
                maxWidth={0.25}
                lineHeight={0.75}
                textAlign="center"
                position={[2, 1, 3]}
            >
                SKILLS
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Float>

        <RigidBody type='fixed' colliders="trimesh" restitution={0.2} friction={0}>
            <RotateObject
                object={star.scene}
                position={[0, 16, -15]}
                rotation={[0, 2, 0]}
                scale={[2, 2, 2]}
            />
        </RigidBody>

        <BlockStart position={[0, 0, 0]} />
    </>
}