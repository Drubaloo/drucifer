/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'
const meshObj = require("../../assets/3dModels/skullboard.gltf")


function Board(props) {

  const group = useRef();
  useFrame((state, delta) => {
    group.current.rotation.y += delta
  })
  const { nodes, materials, animations } = useGLTF(meshObj);
  const { actions } = useAnimations(animations, group);
  return (

    <group ref={group} {...props} dispose={null} position={[0,0, 2]}>
      <group name="Scene">
        <group
          name="Empty"
          position={[0.05, 0.28, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.81}
        />
        <group
          name="Empty001"
          position={[1.24, -1.88, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.12}
        />
        <group name="board" scale={[1, 1, 0.09]}>
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.SkateBottom}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.gripTape}
          />
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.skateWheels}
            position={[0.15, 0.21, 0.72]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.04, 0.15, 0.04]}
          />
          <group name="trucks" scale={[1, 1, 11.32]}>
            <mesh
              name="Cube002"
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials.Material}
            />
            <mesh
              name="Cube002_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_1.geometry}
              material={materials.skateWheels}
            />
          </group>
          <mesh
            name="wheels"
            castShadow
            receiveShadow
            geometry={nodes.wheels.geometry}
            material={materials.skateWheels}
            position={[0.5, 0.56, 2.84]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.24, 0.64, 2.7]}
          />
        </group>
      </group>
    </group >

  );
}

useGLTF.preload(meshObj);
export default function Skullboard() {
  return (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Board />
  </Canvas>
  )


}
