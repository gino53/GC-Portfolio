import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

export default function Effects() {
    return <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
}