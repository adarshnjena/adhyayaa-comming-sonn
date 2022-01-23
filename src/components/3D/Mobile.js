import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Mobile({ ...props }) {
  const group = useRef();
  let model_rotation = { xyz: [0, 4.2, 0] };
  const { nodes, materials } = useGLTF("models/mobile.glb");
  useEffect(() => {}, model_rotation);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[1.2, 1.2, 1.2]}
      rotation={model_rotation.xyz}
    >
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.006"]}
        rotation={[0, 0, -1.57]}
        scale={[2, 1, 1]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["Material.01"]}
        rotation={[0, 0, -1.57]}
        scale={[2, 1, 1]}
      />
      <mesh
        geometry={nodes.buttons.geometry}
        material={nodes.buttons.material}
        position={[0.09, 0.64, -1.01]}
        scale={[-0.04, 0.19, -0.02]}
      />
    </group>
  );
}

useGLTF.preload("/mobile.glb");
