import { useMemo, useState, useRef, useEffect } from "react";
import {
  AlwaysStencilFunc,
  BackSide,
  EqualStencilFunc,
  Plane,
  ReplaceStencilOp,
  Vector3,
} from "three";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import gltfUrl from "../../assets/terrain.glb?url";

const Scene = () => {
  // Model
  const { nodes } = useGLTF(gltfUrl);

  // Clipping plane
  const clippingPlane = useRef(new Plane(new Vector3(0, 0, 1), 0));

  const { position } = useControls({
    position: {
      value: 0.1,
      min: 0,
      max: 1,
      step: 0.01,
    },
  });

  useEffect(() => {
    clippingPlane.current.constant = -position * 8 + 4;
  }, [position]);

  return (
    <>
      {/* Terrain */}
      <group>
        <mesh geometry={nodes.Base.geometry}>
          <meshStandardMaterial color={0xe7ead7} clippingPlanes={[clippingPlane.current]} />
        </mesh>

        <mesh geometry={nodes.Base.geometry}>
          <meshBasicMaterial
            clippingPlanes={[clippingPlane.current]}
            side={BackSide}
            colorWrite={false}
            stencilWrite
            stencilRef={1}
            stencilFunc={AlwaysStencilFunc}
            stencilZPass={ReplaceStencilOp}
          />
        </mesh>
      </group>

      {/* Section Plane */}
      <mesh rotation-y={Math.PI} position-z={position * 8 - 4}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial
          color={0x252815}
          stencilWrite
          stencilRef={1}
          stencilFunc={EqualStencilFunc}
          envMapIntensity={2}
        />
      </mesh>
    </>
  );
};

export default Scene;

useGLTF.preload(gltfUrl);
