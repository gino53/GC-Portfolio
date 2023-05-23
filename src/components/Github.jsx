import { TextureLoader } from 'three';

const Linkedin = () => {
    const texture = new TextureLoader().load('./img/Github.png');

    const handleClick = () => {
        window.open('https://github.com/gino53', '_blank');
    };

    return (
        <mesh onClick={handleClick} onPointerEnter={() => { document.body.style.cursor = 'pointer' }} onPointerLeave={() => { document.body.style.cursor = 'default' }}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="white" map={texture} />
        </mesh>
    );
};

export default Linkedin;