import { Html, PresentationControls, useGLTF, Float } from '@react-three/drei'
import React from 'react';
import { Howl } from 'howler';

const Desk = () => {
    const table = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/table/model.gltf')
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
    const headphone = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/headphones/model.gltf')
    const dog = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf')
    const cactus = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/cactus/model.gltf')

    const music = new Howl({
        src: ['./song/music.wav']
    });

    function dogAudio() {
        if (music.playing()) {
            music.pause();
        } else {
            music.play();
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
                    <ambientLight intensity={0.2} />
                    <pointLight position={[14, 30, 10]} />
                    <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#acb2b2'} rotation={[-0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                    <primitive object={table.scene} position={[0, -2.8, 0]} scale={[1.5, 1.5, 1.5]} />
                    <primitive onClick={keyboardAudio} object={computer.scene} position={[0, -0.6, 0.15]} scale={[0.7, 0.7, 0.7]}>
                        <Html transform wrapperClass='htmlComputer' distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                            <iframe src='https://marble-r.vercel.app/' />
                        </Html>
                    </primitive>
                    <primitive object={phone.scene} position={[-1.6, -0.25, 0.8]} rotation-x={-1.55} scale={[0.3, 0.3, 0.3]}>
                        <Html transform wrapperClass='htmlPhone' distanceFactor={1.17} position-y={1.3} position-x={0.2}>
                            <iframe src='https://gentwopoints.vercel.app/' />
                        </Html>
                    </primitive>
                    <primitive object={headphone.scene} position={[2.1, 0.14, -0.2]} rotation-y={-0.5} scale={[0.41, 0.3, 0.4]} />
                    <primitive object={dog.scene} position={[2, -0.3, 0]} rotation-y={-0.5} scale={[0.5, 0.7, 0.6]} onClick={dogAudio} />
                    <primitive object={cactus.scene} position={[-2.3, -0.32, -0.5]} scale={[0.5, 0.5, 0.5]} />
                    <mesh position={[0, -2.5, 0]}>
                        <boxGeometry args={[6, 0.2, 6]} />
                        <meshStandardMaterial />
                    </mesh>
                </Float>
            </PresentationControls>
        </>
    );
};

export default Desk;