import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    // Use try-catch to handle potential NaN values
    try {
      const points = random.inSphere(new Float32Array(5000), { radius: 1.2 });
      // Filter out any NaN values that might be causing the error
      for (let i = 0; i < points.length; i += 3) {
        if (isNaN(points[i]) || isNaN(points[i + 1]) || isNaN(points[i + 2])) {
          points[i] = 0;
          points[i + 1] = 0;
          points[i + 2] = 0;
        }
      }
      return points;
    } catch (error) {
      console.error("Error generating star positions:", error);
      // Return a safe fallback with no NaNs
      return new Float32Array(5000).fill(0);
    }
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-5] stars-canvas">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{
          position: "absolute",
          pointerEvents: "none", // Prevent canvas from capturing pointer events
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
