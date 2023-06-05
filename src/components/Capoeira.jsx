import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Capoeira(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./capoeira/capoeira.glb");
  const { actions } = useAnimations(animations, group);
  console.log(actions);

  useEffect(() => {
    actions.dance.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Ch03"
            geometry={nodes.Ch03.geometry}
            material={materials.Ch03_Body}
            skeleton={nodes.Ch03.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./capoeira/capoeira.glb");
