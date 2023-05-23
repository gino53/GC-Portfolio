import { Text, Html, ContactShadows, PresentationControls, Environment, useGLTF, Float } from '@react-three/drei'

const Desk = () => {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const headphone = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/headphones/model.gltf')
    const cactus = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/cactus/model.gltf')
    const table = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/table/model.gltf')
    const dog = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf')

    return (<>
        <Environment preset="city" />

        <PresentationControls global rotation={[0.13, 0.1, 0]} polar={[- 0.4, 0.2]} azimuth={[- 1, 0.75]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
            <Float rotationIntensity={0.4}>
                <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#24242d'} rotation={[- 0.1, Math.PI, 0]} position={[0, 0.55, - 1.15]} />
                <primitive object={computer.scene} position={[0, - 0.6, 0.15]} scale={[0.7, 0.7, 0.7]}>
                    <Html transform wrapperClass='htmlScreen' distanceFactor={1.17} position={[- 0.7, 1.56, - 1.5]} rotation-x={-0.256}>
                        <iframe src='https://marble-r.vercel.app/' />
                    </Html>
                </primitive>
                <primitive object={headphone.scene} position={[2.1, 0.1, - 0.2]} rotation-y={- 0.5} scale={[0.4, 0.4, 0.4]} />
                <primitive object={cactus.scene} position={[- 2, - 0.32, - 0.5]} scale={[0.5, 0.5, 0.5]} />
                <primitive object={table.scene} position={[0, - 2.8, 0]} scale={[1.5, 1.5, 1.5]} />
                <primitive object={dog.scene} position={[2, - 0.3, 0]} rotation-y={- 0.5} scale={[0.5, 0.8, 0.6]} />
            </Float>
        </PresentationControls>
    </>
    );
};

export default Desk;