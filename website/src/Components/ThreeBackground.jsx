import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current; // Store initial reference

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Resize handler
    const handleWindowResize = () => {
        const { innerWidth, innerHeight } = window;
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleWindowResize);

    // Particle field
    const particles = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
        color: 0x88c0d0,
        size: 0.05,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Rotate particle system
        particleSystem.rotation.y += 0.001;

        renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
        currentMount.removeChild(renderer.domElement);
        window.removeEventListener('resize', handleWindowResize);
    };
    }, []);

    return <div ref={mountRef} className="three-background"></div>;
};

export default ThreeBackground;
