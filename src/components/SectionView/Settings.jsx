import { Perf } from "r3f-perf";
import { OrbitControls, Environment } from "@react-three/drei";
import px from "../../assets/envmap/px.png";
import nx from "../../assets/envmap/nx.png";
import py from "../../assets/envmap/py.png";
import ny from "../../assets/envmap/ny.png";
import pz from "../../assets/envmap/pz.png";
import nz from "../../assets/envmap/nz.png";

const Settings = () => {
  return (
    <>
      <Perf position="top-left" />

      <color args={[0xf7f8f2]} attach="background" />

      <OrbitControls />

      <Environment background={true} blur={0.4} files={[px, nx, py, ny, pz, nz]} />
    </>
  );
};

export default Settings;
