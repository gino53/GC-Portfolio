import { Physics } from '@react-three/rapier'
import Lights from './Lights.jsx'
import Level from './Level.jsx'
import Player from './Player.jsx'
import Effects from './Effects.jsx'
import { Sky } from '@react-three/drei'

const Experience = () => {


    return <>

        <Sky sunPosition={[100, 20, 100]} />

        <Physics>
            <Lights />
            <Level />
            <Player />
        </Physics>

        <Effects />

    </>
}

export default Experience;