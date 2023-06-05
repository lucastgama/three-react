import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { MathUtils } from "three";
import { Capoeira } from "./components/Capoeira";
import Ground from "./components/Ground";

function App() {
  return (
    <div className="container">
      <Canvas camera={{ fov: 25 }}>
        <color attach="background" args={["#222"]} />
        <OrbitControls
          makeDefault
          minAzimuthAngle={5}
          maxAzimuthAngle={Math.PI / 2}
          enableZoom={false}
          minPolarAngle={0.8}
          maxPolarAngle={1.5}
        />
        <Capoeira scale={0.7} position={[0, -0.5, 0]} />
        <Ground position={[0, -0.51, 0]} />
        <ambientLight color={"#fff"} intensity={0.4} />
        <SpotLight
          distance={8}
          color={"#fff9e3"}
          angle={MathUtils.degToRad(80)}
          intensity={0.5}
          position={[0, 2, -1]}
          volumetric={false}
        />
        <SpotLight
          distance={8}
          color={"#fff0e2"}
          angle={MathUtils.degToRad(80)}
          intensity={1.3}
          position={[0, 1, 2]}
          volumetric={false}
        />
      </Canvas>
    </div>
  );
}

export default App;
