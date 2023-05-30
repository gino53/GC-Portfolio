import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import { Html, Sparkles, Text, Text3D, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import Screen from './Screen'

THREE.ColorManagement.legacyMode = false

function SceneSkills() {
    const tree = useGLTF("./models/tree.gltf");
    tree.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    const rock = useGLTF("./models/rock.gltf");
    rock.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    const bench = useGLTF("./models/bench.gltf");
    bench.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    const lamp = useGLTF("./models/lamp.gltf");

    const farm = useGLTF("./models/farm.gltf");
    farm.scene.children.forEach((mesh) => {
        mesh.castShadow = true
    })

    const [hitAudio] = useState(() => new Audio('./song/hit.mp3'))
    const hitAudioPlayer = () => {
        hitAudio.volume = Math.random();
        hitAudio.play();
    };

    return <>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, 0, 1]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[1, 5, 1]} />
                <meshStandardMaterial color={"#45c421"} />
            </mesh>
            <mesh position={[0, -0.1, 0]} scale={[4, 0.2, 4]} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color={"#45c421"} />
            </mesh>
        </RigidBody>

        <Text position={[-2.01, 0.02, 12]} rotation={[-1.6, 0, 0]} scale={0.2}>
            "TO CONTROLL THIS BALL USE ARROW KEYS"
        </Text>
        <Text position={[-2.25, 0.02, 12.3]} rotation={[-1.6, 0, 0]} scale={0.2}>
            "TO MAKE JUMP THIS BALL USE SPACE"
        </Text>
        <Text position={[-2.52, 0.02, 12.6]} rotation={[-1.6, 0, 0]} scale={0.2}>
            "GO TO THE TOP AND HAVE FUN !"
        </Text>

        <RigidBody colliders='trimesh' onCollisionEnter={hitAudioPlayer}>
            <Text3D font="./fonts/helvetiker_regular.typeface.json" position={[2.5, 0.1, 3.5]} rotation={[0, -0.8, 0]} castShadow>
                SKILLS
                <meshStandardMaterial color={"#ffffff"} />
            </Text3D>
        </RigidBody>

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
    const lightning = useGLTF("./models/lightning.gltf");
    const car = useGLTF("./models/car.gltf");
    const shield = useGLTF("./models/shield.gltf");
    const computer = useGLTF("./models/computer.gltf");
    const spaceship = useGLTF("./models/spaceship.gltf");
    const boat = useGLTF("./models/boat.gltf");
    const cauldron = useGLTF("./models/cauldron.gltf");
    const star = useGLTF("./models/star.gltf");
    const keyboard = useGLTF("./models/keyboard.gltf");

    const [hitAudio] = useState(() => new Audio('./song/hit.mp3'))
    const hitAudioPlayer = () => {
        hitAudio.volume = Math.random();
        hitAudio.play();
    };

    const lightRef = useRef(null);
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

    const [shieldAudio] = useState(() => new Audio('./song/shield.mp3'))
    const shieldAudioPlayer = () => {
        shieldAudio.currentTime = 0
        shieldAudio.play();
    };

    const [collisionDetected, setCollisionDetected] = useState(false);
    const [showIframe, setShowIframe] = useState(false);
    const [computerAudio] = useState(() => new Audio('./song/computer.mp3'))
    const iframeTimeout = 30000;
    const computerCollisionEnter = () => {
        if (!collisionDetected) {
            setCollisionDetected(true);
            setShowIframe(true);
            computerAudio.currentTime = 0
            computerAudio.play();
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

    const [boatAudio] = useState(() => new Audio('./song/boat.mp3'))
    const boatAudioPlayer = () => {
        boatAudio.currentTime = 0
        boatAudio.play();
    };

    const [showBubble, setShowBubble] = useState(false);
    const [bubbleAudio] = useState(() => new Audio('./song/cauldron.mp3'));
    const bubbleCollisionEnter = () => {
        setShowBubble(true);
        bubbleAudio.currentTime = 0;
        bubbleAudio.play();
    };
    useEffect(() => {
        let timer;
        if (showBubble) {
            timer = setTimeout(() => {
                setShowBubble(false);
            }, 7000);
        }
        return () => clearTimeout(timer);
    }, [showBubble]);

    const [showStars, setShowStars] = useState(false);
    const [starAudio] = useState(() => new Audio('./song/star.mp3'));
    const starsCollisionEnter = () => {
        setShowStars(true);
        starAudio.currentTime = 0;
        starAudio.play();
    };
    useEffect(() => {
        let timer;
        if (showStars) {
            timer = setTimeout(() => {
                setShowStars(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showStars]);

    const [keyboardAudio] = useState(() => new Audio('./song/keyboard.mp3'))
    const keyboardAudioPlayer = () => {
        if (!isAudioPlaying) {
            keyboardAudio.currentTime = 0
            keyboardAudio.play();
        }
    };

    return <>
        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <mesh position={[0, 14, -62.5]} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color={"#3e403e"} />
            </mesh>
        </RigidBody>

        <Text position={[-1.9, 14.6, -14]} rotation={[-1.6, 0, 0]} scale={0.2}>
            "RUN INTO OBJECTS"
        </Text>
        <Text position={[-1.759, 14.6, -13.5]} rotation={[-1.6, 0, 0]} scale={0.2}>
            "CLICK ON THE IMAGES"
        </Text>

        <RigidBody colliders='trimesh' onCollisionEnter={hitAudioPlayer}>
            <Text3D font="./fonts/helvetiker_regular.typeface.json" position={[-1.8, 14.8, -16]} castShadow>
                WORKS
                <meshStandardMaterial color={"#ffffff"} />
            </Text3D>
        </RigidBody>

        <RigidBody type='fixed' restitution={0.2} friction={0}>
            <Screen />
        </RigidBody>

        <RigidBody restitution={0.4} onCollisionEnter={hitAudioPlayer}>
            <primitive object={lightning.scene} position={[5.4, 17.5, -16]} rotation={[0, -1, 0]} scale={1} />
        </RigidBody>

        <RigidBody type='fixed' colliders='trimesh' onCollisionEnter={carAudioPlayer}>
            <primitive object={car.scene} position={[5.3, 14.5, -22.4]} rotation={[0, -0.8, 0]} scale={0.5} />
        </RigidBody>
        <rectAreaLight ref={lightRef} width={1.4} height={1} intensity={35} color={'#f1f1f1'} rotation={[0, 2.3, 0]} position={[4.3, 14.5, -21.6]} />

        <RigidBody type='fixed' colliders='hull' restitution={5} onCollisionEnter={shieldAudioPlayer}>
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

        <RigidBody type='fixed' colliders='hull' onCollisionEnter={boatAudioPlayer}>
            <primitive object={boat.scene} position={[-2, 14.5, -26]} rotation={[0, -2, 0]} scale={0.5} />
        </RigidBody>

        <RigidBody type='fixed' colliders='trimesh' onCollisionEnter={bubbleCollisionEnter}>
            <primitive object={cauldron.scene} position={[-3.5, 14.5, -28]} rotation={[0, -2, 0]} scale={0.8} />
            {showBubble && (
                <group position={[-3.5, 15.5, -27.6]} rotation={[0, 0, 1.4]}>
                    {[...Array(100)].map((_, index) => (
                        <Sparkles key={index} count={1} scale={1} size={150} position={[index * 0.1, 0, 0]} speed={0.4} color="#67ff95" />
                    ))}
                </group>
            )}
        </RigidBody>

        <RigidBody type='fixed' onCollisionEnter={starsCollisionEnter}>
            <primitive object={star.scene} position={[-3.5, 15, -34]} rotation={[0, 1, 0]} scale={1} />
            {showStars && (
                <Sparkles count={1000} scale={10} size={10} position={[-3.5, 15, -34]} speed={5} color="yellow" />
            )}
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