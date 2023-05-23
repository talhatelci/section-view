import { Canvas } from "@react-three/fiber";
import Settings from "./Settings.jsx";
import Scene from "./Scene.jsx";

const SectionView = () => {
  return (
    <div className="section-view">
      <Canvas
        gl={{
          stencil: true,
          localClippingEnabled: true,
        }}
        camera={{
          position: [-3, 5, -9],
        }}
      >
        <Settings />
        <Scene />
      </Canvas>
    </div>
  );
};

export default SectionView;
