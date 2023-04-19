import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'

function Test001(props) {
    const { nodes, materials } = useGLTF(require("../../assets/3dModels/test.gltf"));

    const [ycord, setYcord] = useState(6.27)

    let xcord = -2.24
    
    return (
        <group position={[0, -10, 0]} scale={[2, 2, 2]} {...props} dispose={null} >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                position={[-1.54, 6.18, 0]}
                rotation={[0, 0, 0.94]}
                scale={[0.38, 0.17, 0.87]}

                onClick={() => {
                    xcord += 1
                    ycord += 1
                }}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials.Material}
                position={[1.07, 5.89, 0]}
                rotation={[0, 0, 0.94]}
                scale={[0.38, 0.09, 0.85]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials.Material}
                position={[-1.09, 4.73, 0]}
                rotation={[0, 0, 0.94]}
                scale={[0.4, 0.15, 0.77]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone.geometry}
                material={nodes.Cone.material}
                position={[1.62, 4.87, 0]}
                rotation={[0.7, 0, 0]}
                scale={0.37}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone001.geometry}
                material={nodes.Cone001.material}
                position={[-1.2, 5.62, 0.92]}
                rotation={[-0.12, 0, 0]}
                scale={0.37}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={nodes.Sphere.material}
                position={[-2.24, ycord, -3.08]}
                scale={1.37}
                onPointerMove={() => {setYcord(ycord+1)}}
            />
        </group>
    );
}

useGLTF.preload("/test.gltf");
export default function Test() {

    return <div style={{ zIndex: "-1", position: "fixed", height: "100dvh", width: "100dvw", border: "2px solid red", pointerEvents: "none" }}>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Test001 />
        </Canvas>
    </div >
}