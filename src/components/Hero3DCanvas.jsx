import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    let renderer = null;
    let scene = null;
    let camera = null;
    let animationFrameId = null;

    // Meshes
    let characterCoreGroup = null;
    let wireMesh = null;
    let innerPoly = null;
    let floatingCubes = [];
    let ring1 = null;
    let ring2 = null;
    let particleSystem = null;

    // Geometries & Materials to dispose
    let disposables = [];

    try {
      // Test WebGL context
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        throw new Error('WebGL not supported');
      }

      const width = currentMount.clientWidth || window.innerWidth || 800;
      const height = currentMount.clientHeight || 600;

      // 1. Scene setup
      scene = new THREE.Scene();

      // 2. Camera setup (adapted for mobile portrait or desktop landscape)
      const aspect = width / (height || 1);
      camera = new THREE.PerspectiveCamera(55, aspect, 0.1, 1000);
      camera.position.z = width < 640 ? 5.8 : 4.6;

      // 3. Renderer
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true, 
        powerPreference: 'high-performance' 
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      if (currentMount) {
        currentMount.appendChild(renderer.domElement);
      }

      // 4. Central 3D Cyber Hologram Character Core
      characterCoreGroup = new THREE.Group();
      scene.add(characterCoreGroup);

      // Cyber Holographic Torus Knot / AI Neural Core
      const coreGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 100, 16);
      disposables.push(coreGeometry);
      const wireMaterial = new THREE.MeshBasicMaterial({
        color: 0x00f5d4,
        wireframe: true,
        transparent: true,
        opacity: 0.55
      });
      disposables.push(wireMaterial);
      wireMesh = new THREE.Mesh(coreGeometry, wireMaterial);
      characterCoreGroup.add(wireMesh);

      // Inner glowing cyber polyhedron
      const innerGeometry = new THREE.IcosahedronGeometry(0.85, 0);
      disposables.push(innerGeometry);
      const innerMaterial = new THREE.MeshPhongMaterial({
        color: 0x7c3aed,
        emissive: 0x3b0764,
        specular: 0x00d2ff,
        shininess: 90,
        transparent: true,
        opacity: 0.85
      });
      disposables.push(innerMaterial);
      innerPoly = new THREE.Mesh(innerGeometry, innerMaterial);
      characterCoreGroup.add(innerPoly);

      // Surrounding Orbit Rings
      const ringGeometry = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
      disposables.push(ringGeometry);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        transparent: true,
        opacity: 0.45
      });
      disposables.push(ringMaterial);

      ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
      ring1.rotation.x = Math.PI / 3;
      characterCoreGroup.add(ring1);

      ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
      ring2.rotation.y = Math.PI / 3;
      ring2.rotation.x = -Math.PI / 4;
      characterCoreGroup.add(ring2);

      // 5. Floating 3D Geometric Objects (Data Nodes)
      const floatGeo = new THREE.OctahedronGeometry(0.25, 0);
      disposables.push(floatGeo);
      const floatMat = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        wireframe: true,
        emissive: 0x00f5d4,
        emissiveIntensity: 0.3
      });
      disposables.push(floatMat);

      for (let i = 0; i < 6; i++) {
        const floatMesh = new THREE.Mesh(floatGeo, floatMat);
        const angle = (i / 6) * Math.PI * 2;
        floatMesh.position.set(
          Math.cos(angle) * 2.8,
          Math.sin(angle) * 1.5,
          (Math.random() - 0.5) * 2
        );
        floatingCubes.push({
          mesh: floatMesh,
          speed: 0.8 + Math.random() * 0.5,
          angleOffset: angle
        });
        characterCoreGroup.add(floatMesh);
      }

      // 6. Cyber Star / Particle Field
      const particleCount = width < 640 ? 300 : 600;
      const particleGeometry = new THREE.BufferGeometry();
      disposables.push(particleGeometry);
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorCyan = new THREE.Color(0x00f5d4);
      const colorPurple = new THREE.Color(0xa855f7);
      const colorBlue = new THREE.Color(0x00d2ff);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 14;

        const mixed = Math.random() > 0.5 
          ? colorCyan.clone().lerp(colorPurple, Math.random()) 
          : colorBlue.clone().lerp(colorCyan, Math.random());
        colors[i * 3] = mixed.r;
        colors[i * 3 + 1] = mixed.g;
        colors[i * 3 + 2] = mixed.b;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: width < 640 ? 0.04 : 0.035,
        vertexColors: true,
        transparent: true,
        opacity: 0.85
      });
      disposables.push(particleMaterial);

      particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      // 7. Dynamic Lighting
      const ambientLight = new THREE.AmbientLight(0x050512, 3);
      scene.add(ambientLight);

      const cyanPoint = new THREE.PointLight(0x00f5d4, 4, 30);
      cyanPoint.position.set(4, 4, 4);
      scene.add(cyanPoint);

      const purplePoint = new THREE.PointLight(0xa855f7, 4, 30);
      purplePoint.position.set(-4, -3, 3);
      scene.add(purplePoint);

      // Mouse & Touch Parallax tracking
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handlePointerMove = (e) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const w = window.innerWidth || 1;
        const h = window.innerHeight || 1;
        mouseX = (clientX / w - 0.5) * 1.5;
        mouseY = (clientY / h - 0.5) * 1.5;
      };

      window.addEventListener('mousemove', handlePointerMove, { passive: true });
      window.addEventListener('touchmove', handlePointerMove, { passive: true });

      // Resize Handler
      const handleResize = () => {
        if (!currentMount || !renderer || !camera) return;
        const w = currentMount.clientWidth || window.innerWidth;
        const h = currentMount.clientHeight || window.innerHeight;
        camera.aspect = w / (h || 1);
        camera.position.z = w < 640 ? 5.8 : 4.6;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        if (characterCoreGroup) {
          characterCoreGroup.rotation.y = elapsedTime * 0.25 + targetX * 0.6;
          characterCoreGroup.rotation.x = elapsedTime * 0.12 + targetY * 0.4;
          characterCoreGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.12;
        }

        if (innerPoly) {
          innerPoly.rotation.y = -elapsedTime * 0.45;
          innerPoly.rotation.z = elapsedTime * 0.3;
        }

        if (ring1) ring1.rotation.z = elapsedTime * 0.35;
        if (ring2) ring2.rotation.z = -elapsedTime * 0.28;

        // Animate floating geometric objects
        floatingCubes.forEach((fc) => {
          const theta = fc.angleOffset + elapsedTime * 0.4 * fc.speed;
          fc.mesh.position.x = Math.cos(theta) * 2.8;
          fc.mesh.position.y = Math.sin(theta * 1.2) * 1.4;
          fc.mesh.rotation.x = elapsedTime * fc.speed;
          fc.mesh.rotation.y = elapsedTime * fc.speed * 1.2;
        });

        if (particleSystem) {
          particleSystem.rotation.y = -elapsedTime * 0.02;
        }

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('touchmove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);

        if (currentMount && renderer?.domElement && currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }

        try {
          disposables.forEach(d => d?.dispose?.());
          renderer?.dispose();
        } catch (e) {}
      };
    } catch (err) {
      console.warn("Hero3DCanvas: WebGL context fallback activated:", err);
      setHasWebGLError(true);
      return () => {};
    }
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full absolute inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Fallback CSS animated 3D cyber visual when WebGL is unsupported or reduced motion */}
      {hasWebGLError && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-spin border-dashed" style={{ animationDuration: '24s' }} />
            <div className="absolute inset-8 rounded-full border-2 border-purple-500/40 animate-spin border-dotted" style={{ animationDuration: '18s', animationDirection: 'reverse' }} />
            <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/30 to-pink-500/20 blur-xl animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
}
