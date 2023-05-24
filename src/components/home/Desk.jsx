import { TextureLoader } from 'three';
import { Html, PresentationControls, useGLTF, Float, ContactShadows } from '@react-three/drei'
import React from 'react';
import { Howl } from 'howler';

const Desk = () => {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const headphone = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/headphones/model.gltf')
    const cactus = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/cactus/model.gltf')
    const table = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/table/model.gltf')
    const dog = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf')

    const textures = {
        "map": "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/materials/tiles/Tiles036_1K_Color.jpg",
        "displacementMap": "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/materials/tiles/Tiles036_1K_Displacement.jpg",
        "normalMap": "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/materials/tiles/Tiles036_1K_Normal.jpg",
        "roughnessMap": "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/materials/tiles/Tiles036_1K_Roughness.jpg"
    }

    const sound = new Howl({
        src: ['./song/sound.wav']
    });

    function headphoneAudio() {
        if (sound.playing()) {
            sound.pause();
        } else {
            sound.play();
        }
    }

    const click = new Howl({
        src: ['./song/click.mp3']
    });

    function keyboardAudio() {
        click.play();
    }

    return (
        <>
            <PresentationControls snap global zoom={0.8} rotation={[0.13, 0.1, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                <Float rotationIntensity={0.4}>
                    <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#24242d'} rotation={[-0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                    <primitive onClick={keyboardAudio} object={computer.scene} position={[0, -0.6, 0.15]} scale={[0.7, 0.7, 0.7]}>
                        <Html transform wrapperClass='htmlScreen' distanceFactor={1.17} position={[0.1, 1.52, -1.8]} rotation-x={-0.256}>
                            <iframe src='https://marble-r.vercel.app/' />
                        </Html>
                    </primitive>
                    <primitive object={headphone.scene} position={[2.1, 0.14, -0.2]} rotation-y={-0.5} scale={[0.41, 0.3, 0.4]} />
                    <primitive object={cactus.scene} position={[-2, -0.32, -0.5]} scale={[0.5, 0.5, 0.5]} />
                    <primitive object={table.scene} position={[0, -2.8, 0]} scale={[1.5, 1.5, 1.5]} />
                    <primitive onClick={headphoneAudio} object={dog.scene} position={[2, -0.3, 0]} rotation-y={-0.5} scale={[0.5, 0.7, 0.6]} />
                    <mesh position={[0, -2.5, 0]}>
                        <boxGeometry args={[6, 0.2, 6]} />
                        <meshStandardMaterial
                            map={new TextureLoader().load(textures.map)}
                            displacementMap={new TextureLoader().load(textures.displacementMap)}
                            normalMap={new TextureLoader().load(textures.normalMap)}
                            roughnessMap={new TextureLoader().load(textures.roughnessMap)}
                        />
                    </mesh>
                    <mesh position={[0, 0.5, -3]} rotation={[1.55, 0, 0]}>
                        <boxGeometry args={[6, 0.2, 6]} />
                        <meshStandardMaterial />
                    </mesh>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[14, 30, 10]} />
                </Float>
            </PresentationControls>
        </>
    );
};

export default Desk;