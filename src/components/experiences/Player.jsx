import * as THREE from 'three';
import { useState, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture, Text, useKeyboardControls } from "@react-three/drei";
import { RigidBody, useRapier } from "@react-three/rapier";
import useGame from "./stores/useGame.jsx";

export default function Player() {
    const body = useRef()
    const [subscribeKeys, getKeys] = useKeyboardControls()
    const { rapier, world } = useRapier()
    const rapierWorld = world.raw()

    const [ballSound] = useState(() => new Audio('./song/ball.mp3'))

    const collisionEnter = () => {
        ballSound.currentTime = 0
        ballSound.play()
    }

    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(10, 10, 10))
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3())

    const start = useGame((state) => state.start)

    const jump = () => {
        const origin = body.current.translation()
        origin.y -= 0.31
        const direction = { x: 0, y: - 1, z: 0 }
        const ray = new rapier.Ray(origin, direction)
        const hit = rapierWorld.castRay(ray, 10, true)

        if (hit.toi < 0.15) {
            body.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
        }
    }

    const reset = () => {
        body.current.setTranslation({ x: 0, y: 1, z: 13 })
        body.current.setLinvel({ x: 0, y: 0, z: 0 })
        body.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    useEffect(() => {
        const unsubscribeReset = useGame.subscribe(
            (state) => state.phase,
            (value) => {
                if (value === 'ready') {
                    reset()
                }
            }
        )

        const unsubscribeJump = subscribeKeys(
            (state) => state.jump,
            (value) => {
                if (value) {
                    jump()
                }
            }
        )

        const unsubscribeAny = subscribeKeys(() => {
            start()
        })

        return () => {
            unsubscribeReset()
            unsubscribeJump()
            unsubscribeAny()
        }
    }, [])

    useFrame((state, delta) => {
        /**
         * Controls
         */
        const { forward, backward, leftward, rightward } = getKeys()

        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }

        const impulseStrenght = 0.6 * delta
        const torqueStrenght = 0.2 * delta

        if (forward) {
            impulse.z -= impulseStrenght
            torque.x -= torqueStrenght
        }

        if (backward) {
            impulse.z += impulseStrenght
            torque.x += torqueStrenght
        }

        if (leftward) {
            impulse.x -= impulseStrenght
            torque.z += torqueStrenght
        }

        if (rightward) {
            impulse.x += impulseStrenght
            torque.z -= torqueStrenght
        }

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)

        /**
         * Camera
         */
        const bodyPosition = body.current.translation()

        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 6.25
        cameraPosition.y += 4.65

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 0.25

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
        smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)
    })

    const textRef = useRef();
    useFrame(
        (state) =>
            (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    );

    return <RigidBody ref={body} colliders='ball' restitution={0.2} friction={1} linearDamping={0.5} angularDamping={0.5} position={[0, 0, 13]} onCollisionEnter={collisionEnter}>

        <mesh castShadow>
            <icosahedronGeometry args={[0.3, 1]} />
            <meshStandardMaterial flatShading>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={["#683022"]} />
                    <Text ref={textRef} fontSize={3} color="#d3b6a5">
                        GC
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    </RigidBody>
}