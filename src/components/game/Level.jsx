import * as THREE from 'three'
import { TextureLoader } from 'three';
import { RigidBody } from '@react-three/rapier'
import { Float, Html, Sparkles, Text, useGLTF } from '@react-three/drei'
import Mac from '../Mac';
import { useEffect, useRef, useState } from 'react';

THREE.ColorManagement.legacyMode = false

function SceneSkills() {
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

    return <>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, 0, 1]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[1, 3, 1]} />
                <meshStandardMaterial color={"#45c421"} />
            </mesh>
            <mesh position={[0, -0.1, 0]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color={"#45c421"} />
            </mesh>
        </RigidBody>
        <Float floatIntensity={0.5} rotationIntensity={0.5}>
            <Text scale={0.5} maxWidth={0.25} lineHeight={0.75} textAlign="center" position={[2, 1, 3]}>
                SKILLS
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Float>
        <RigidBody type='fixed' colliders="trimesh" restitution={0.2} friction={0}>
            <primitive object={tree.scene} position={[3, 0, 1.5]} rotation={[0, -2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={tree.scene.clone()} position={[-3, 0, 1]} rotation={[0, -2, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={rock.scene} position={[3, 0, 1.9]} rotation={[0, -1, 0]} scale={[0.3, 0.3, 0.3]} />
            <primitive object={rock.scene.clone()} position={[-3, 0, 1.1]} rotation={[0, 2, 0]} scale={[1, 1, 1]} />
            <primitive object={bench.scene} position={[-3, 0, 4]} rotation={[0, 2, 0]} scale={[0.6, 0.6, 0.6]} />
            <primitive object={lamp.scene} position={[-4, 0, 3]} rotation={[0, 1, 0]} scale={[0.6, 0.6, 0.6]} />
            <primitive object={farm.scene} position={[-0.4, -0.01, -10]} rotation={[0, -0.8, 0]} scale={[5, 5, 5]} />
        </RigidBody>
    </>
}

const Cube = ({ position, texture }) => {
    return <>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={position} castShadow receiveShadow>
                <boxGeometry />
                <meshStandardMaterial map={texture} />
            </mesh>
        </RigidBody>
    </>
};

function CubeSkills({ position = [0, 0, 0] }) {
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

    return <group position={position} rotation={[0, Math.PI, 0]}>
        {cubePositions.map((position, index) => (
            <Cube key={index} position={position} texture={new TextureLoader().load(textures[index])} />
        ))}
    </group>
}

function SceneWorks() {
    const lightRef = useRef(null);

    const lightning = useGLTF("./models/lightning.gltf");
    const car = useGLTF("./models/car.gltf");
    const shield = useGLTF("./models/shield.gltf");
    const computer = useGLTF("./models/computer.gltf");
    const spaceship = useGLTF("./models/spaceship.gltf");
    const boat = useGLTF("./models/boat.gltf");
    const cauldron = useGLTF("./models/cauldron.gltf");
    const star = useGLTF("./models/star.gltf");
    const keyboard = useGLTF("./models/keyboard.gltf");

    const [carAudio] = useState(() => new Audio('./song/car.mp3'))
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const carAudioPlayer = () => {
        if (!isAudioPlaying) {
            setIsAudioPlaying(true);
            carAudio.play();
            lightRef.current.color.set('#ff0000');
        }
    };
    carAudio.addEventListener('ended', () => {
        setIsAudioPlaying(false);
        lightRef.current.color.set('#f1f1f1');
    });

    const [keyboardAudio] = useState(() => new Audio('./song/keyboard.mp3'))
    const keyboardAudioPlayer = () => {
        if (!isAudioPlaying) {
            setIsAudioPlaying(true);
            keyboardAudio.currentTime = 0
            keyboardAudio.play();
        }
    };

    const [collisionDetected, setCollisionDetected] = useState(false);
    const [showIframe, setShowIframe] = useState(false);
    const iframeTimeout = 30000;
    const computerCollisionEnter = () => {
        if (!collisionDetected) {
            setCollisionDetected(true);
            setShowIframe(true);
        }
    };
    const computerCollisionExit = () => {
        setCollisionDetected(false);
    };
    useEffect(() => {
        let timer;

        if (showIframe) {
            timer = setTimeout(() => {
                setShowIframe(false);
            }, iframeTimeout);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [showIframe]);

    const [showSparkles, setShowSparkles] = useState(false);
    const [spaceshipAudio] = useState(() => new Audio('./song/spaceship.mp3'))
    const spaceshipCollisionEnter = () => {
      setShowSparkles(true);
      spaceshipAudio.currentTime = 0
      spaceshipAudio.play()
    };
    const spaceshipCollisionExit = () => {
      setShowSparkles(false);
    };

    return <>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, 14, -62.5]} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color={"#3e403e"} />
            </mesh>
        </RigidBody>
        <Float floatIntensity={0.2} rotationIntensity={0.2}>
            <Text scale={0.5} maxWidth={0.25} lineHeight={0.75} textAlign="center" position={[2, 16, -15]}>
                WORKS
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Float>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <Mac />
        </RigidBody>
        <RigidBody restitution={0.4}>
            <primitive object={lightning.scene} position={[5.4, 17.5, -16]} rotation={[0, -1, 0]} scale={1} />
        </RigidBody>
        <RigidBody type='fixed' colliders='trimesh' onCollisionEnter={carAudioPlayer}>
            <primitive object={car.scene} position={[5.3, 14.5, -22.4]} rotation={[0, -0.8, 0]} scale={0.5} />
        </RigidBody>
        <rectAreaLight ref={lightRef} width={1.4} height={1} intensity={35} color={'#f1f1f1'} rotation={[0, 2.3, 0]} position={[4.3, 14.5, -21.6]} />
        <RigidBody type='fixed' colliders='hull' restitution={5}>
            <primitive object={shield.scene} position={[4.3, 15.5, -28]} rotation={[0, -0.7, 0]} scale={1.5} />
        </RigidBody>
        <RigidBody type='fixed' colliders='hull' onCollisionEnter={computerCollisionEnter} onCollisionExit={computerCollisionExit}>
            <primitive object={computer.scene} position={[4, 14.5, -34]} rotation={[0, -1, 0]} scale={0.4}>
                {showIframe && (
                    <Html transform wrapperClass='htmlComputer' distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                        <iframe src='https://ginoportfolio.netlify.app/' />
                    </Html>
                )}
            </primitive>
        </RigidBody>
        <RigidBody type='fixed' colliders='hull' onCollisionEnter={spaceshipCollisionEnter} onCollisionExit={spaceshipCollisionExit}>
            <primitive object={spaceship.scene} position={[-4, 16, -15.8]} rotation={[0, 1, 0]} scale={0.5} />
            {showSparkles && (
                        <group position={[-3, 15.5, -15]} rotation={[0, -0.5, 0]}>
                        {[...Array(100)].map((_, index) => (
                          <Sparkles key={index} count={1} scale={1} size={150} position={[index * 0.1, 0, 0]} speed={0.4} color="orange" />
                        ))}
                      </group>
            )}
        </RigidBody>
        <RigidBody type='fixed' colliders='hull'>
            <primitive object={boat.scene} position={[-2, 14.5, -26]} rotation={[0, -2, 0]} scale={0.5} />
        </RigidBody>
        <RigidBody type='fixed' colliders='trimesh'>
            <primitive object={cauldron.scene} position={[-3.5, 14.5, -28]} rotation={[0, -2, 0]} scale={0.8} />
        </RigidBody>
        <RigidBody friction={0}>
            <primitive object={star.scene} position={[-3.5, 15, -34]} rotation={[0, 1, 0]} scale={1} />
        </RigidBody>
        <RigidBody type='fixed' colliders='hull' onCollisionEnter={keyboardAudioPlayer}>
            <primitive object={keyboard.scene} position={[0, 14.5, -36.5]} scale={0.5} />
        </RigidBody>
    </>
}

const Level = () => {
    return <>
        <SceneSkills />
        <CubeSkills />
        <SceneWorks />
    </>
}

export default Level;