
import React, { useRef, useState } from 'react'
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'

const linkedIn = require('../../assets/3dModels/LinkdInLogo.gltf')

export function Model(props) {
    const { nodes, materials } = useGLTF(linkedIn);

    const [open, setOpen] = useState(false)

    const flash = useRef();

    useFrame((state, delta) => {
        if (open) {
            flash.current.rotation.y += delta
        } else if (flash.current.rotation.y > 0){
            console.log(flash.current.rotation.y)
            flash.current.rotation.y -= delta
        }
    })

    return (
        <group ref ={flash} {...props} dispose={null} scale={[.6, .6, .6]} onPointerEnter={() => {
            setOpen(true)
        }}

            onPointerLeave={() => {
                setOpen(false)
            }}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials.black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_1.geometry}
                material={materials.purple}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_2.geometry}
                material={materials.yellow}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_3.geometry}
                material={materials.pink}
            />
        </group>
    );
}

useGLTF.preload(linkedIn);

export default function LinkdIn(props) {


    return <div style={{ height: "30dvh", pointerEvents: "none" }}>
        <Canvas >
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} default={true} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {/* <pointLight position={[5, 5, 5]} /> */}
            <Model />
        </Canvas>
    </div >
}