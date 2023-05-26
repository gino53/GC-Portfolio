import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sparkles, Float, Text, useGLTF } from '@react-three/drei'

THREE.ColorManagement.legacyMode = false

const boxGeometry = new THREE.BoxGeometry(100, 1, 100)

const floor1Material = new THREE.MeshStandardMaterial({ color: '#111111', metalness: 10, roughness: 10 })

function BlockStart({ position = [0, 0, 0] }) {
    return <group position={position}>
        <Float floatIntensity={0.5} rotationIntensity={0.5}>
            <Text
                scale={0.5}
                maxWidth={0.25}
                lineHeight={0.75}
                textAlign="right"
                position={[0, 1, 0]}
            >
                SKILLS
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Float>

        <RigidBody type='fixed' restitution={0.2} friction={0}>
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
        </RigidBody>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
        <mesh position={[0, 1, -1]}>
            <boxGeometry  />
            <meshStandardMaterial />
        </mesh>
        </RigidBody>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
        <mesh position={[0, 2, -2]}>
            <boxGeometry  />
            <meshStandardMaterial />
        </mesh>
        </RigidBody>

        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh geometry={boxGeometry} material={floor1Material} position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        </RigidBody>
    </group>
}

export default function Level() {

    return <>
        <BlockStart position={[0, 0, 0]} />
    </>
}