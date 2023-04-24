import React, { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from "@react-three/drei";

const instaCam = require('../../assets/3dModels/instaCam.gltf')

export function Model(props) {
    const { nodes, materials } = useGLTF(instaCam);

    const [open, setOpen] = useState(false)

    const flash = useRef();

    useFrame((state, delta) => {
        if (open) {
            flash.current.rotation.x = Math.max(flash.current.rotation.x - delta * 2, 1.5);
        } else {
            flash.current.rotation.x = Math.min(flash.current.rotation.x + delta * 2, 5);
        }
    })

    return (
        <group {...props} dispose={null} position={[0, -.1, 0]} onPointerEnter={() => {
            setOpen(true)
        }}

            onPointerLeave={() => {
                setOpen(false)
            }}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={materials.Pink}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_2.geometry}
                material={materials.Yellow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Roundcube.geometry}
                material={materials.Black}
                position={[0, 0.48, -.01]}
                scale={.9}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_3.geometry}
                material={materials.Green}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_4.geometry}
                material={materials.Purple}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5.geometry}
                material={materials.Black}
            />
            <group ref={flash} position={[0, 1, 0]} rotation={[5, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials.Pink}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_2.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_3.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_4.geometry}
                    material={materials.Black}
                />
            </group>
        </group>
    );
}

useGLTF.preload(instaCam);

export default function InstaCam(props) {


    return <div style={{ height: "30dvh", pointerEvents: "none" }}>
        <Canvas orthographic camera={{ zoom: 45, position: [0, 0, 10] }}>
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} default={true} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {/* <pointLight position={[5, 5, 5]} /> */}
            <Model />
        </Canvas>
    </div >
}