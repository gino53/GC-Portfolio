import { TextureLoader } from 'three';

const Linkedin = () => {
    const texture = new TextureLoader().load('./img/icons/Linkedin.png');

    const handleClick = () => {
        window.open('https://www.linkedin.com/in/gino-castagna/', '_blank');
    };

    return (
        <mesh onClick={handleClick} onPointerEnter={() => { document.body.style.cursor = 'pointer' }} onPointerLeave={() => { document.body.style.cursor = 'default' }}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#f6e6db" map={texture} />
        </mesh>
    );
};

export default Linkedin;