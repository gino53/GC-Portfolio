import React, { useState } from 'react';
import { Html, PresentationControls, useGLTF, Float, ContactShadows } from '@react-three/drei'

const Desk = () => {
    const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")
    const headphone = useGLTF("./models/headphone.gltf")
    const dog = useGLTF("./models/dog.gltf")

    const [computerAudio] = useState(() => new Audio('./song/keyboard.mp3'))
    const computerAudioPlayer = () => {
        computerAudio.currentTime = 0
        computerAudio.play();
    };

    const [dogAudio] = useState(() => new Audio('./song/music.wav'));
    let isPlaying = false;
    const dogAudioPlayer = () => {
        if (isPlaying) {
            dogAudio.pause();
            isPlaying = false;
        } else {
            dogAudio.play();
            isPlaying = true;
        }
    };

    window.addEventListener('message', (event) => {
        if (event.data === 'disableIframe') {
            const htmlComputer = document.querySelector('.htmlComputer');
            htmlComputer.style.display = 'none';
            const htmlDog = document.querySelector('.htmlDog');
            htmlDog.style.display = 'none';
        } else if (event.data === 'enableIframe') {
            const htmlComputer = document.querySelector('.htmlComputer');
            htmlComputer.style.display = 'block';
            const htmlDog = document.querySelector('.htmlDog');
            htmlDog.style.display = 'block';
        }
    });

    return (
        <>
            <PresentationControls snap global zoom={0.8} rotation={[0.13, 0.1, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                <Float floatIntensity={1} rotationIntensity={1}>
                    <ambientLight intensity={0.2} />
                    <pointLight position={[14, 30, 10]} />
                    <rectAreaLight width={2.5} height={1.65} intensity={55} color={'#acb2b2'} rotation={[-0.1, Math.PI, 0]} position={[-1.4, 1, -1.4]} />
                    <primitive object={computer.scene} position={[-1.8, -3, 0]} rotation-y={[0.2]} scale={[2, 2, 2]} onClick={computerAudioPlayer}>
                        <Html transform wrapperClass='htmlComputer' distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                            <iframe src='https://marble-r.vercel.app/' />
                        </Html>
                    </primitive>
                    <primitive object={headphone.scene} position={[3.3, 0, -0.6]} scale={[1.8, 1.2, 1.2]} onClick={dogAudioPlayer} />
                    <primitive object={dog.scene} position={[3.3, -1, 0]} scale={[2, 2, 2]} onClick={dogAudioPlayer}>
                        <Html transform wrapperClass='htmlDog' distanceFactor={1.17} position={[0, 0.4, 0.34]} rotation-x={-0.256}>
                            <h2 style={{ textAlign: 'center', color: '#f6e6db' }} onClick={dogAudioPlayer}>CLICK ME</h2>
                        </Html>
                    </primitive>
                </Float>
            </PresentationControls>
            <ContactShadows position-y={-4} opacity={0.7} scale={12} blur={2.4} />
        </>
    );
};

export default Desk;