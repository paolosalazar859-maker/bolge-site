"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const isMobile = width < 768;

    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particle Configuration
    const starsCount = isMobile ? 500 : 1500;
    const nebulaCount = isMobile ? 250 : 700;

    // 1. Starfield (Background)
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      starsPositions[i] = (Math.random() - 0.5) * 100;
      starsPositions[i + 1] = (Math.random() - 0.5) * 100;
      starsPositions[i + 2] = (Math.random() - 0.5) * 50 - 20; // set behind
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3));

    // Create a circular particle texture
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.1,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // 2. Nebula (Foreground colored glowing clouds)
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);

    // BØLGE Colors: Neon Purple (#7C3AED) & Electric Blue (#2563EB)
    const colorPurple = new THREE.Color("#7C3AED");
    const colorBlue = new THREE.Color("#2563EB");
    const colorDarkPurple = new THREE.Color("#4C1D95");

    for (let i = 0; i < nebulaCount; i++) {
      // Create a clump/cloud shape using spherical coordinates
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.pow(Math.random(), 2) * 15; // denser at center

      const idx = i * 3;
      nebulaPositions[idx] = r * Math.sin(phi) * Math.cos(theta);
      nebulaPositions[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      nebulaPositions[idx + 2] = r * Math.cos(phi) * 0.5; // flatten slightly in z-axis

      // Interpolate colors between blue and purple
      const mixRatio = Math.random();
      let colorNode = colorBlue.clone();
      if (mixRatio > 0.6) {
        colorNode.lerp(colorPurple, (mixRatio - 0.6) / 0.4);
      } else {
        colorNode.lerp(colorDarkPurple, mixRatio / 0.6);
      }

      nebulaColors[idx] = colorNode.r;
      nebulaColors[idx + 1] = colorNode.g;
      nebulaColors[idx + 2] = colorNode.b;
    }

    nebulaGeometry.setAttribute("position", new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute("color", new THREE.BufferAttribute(nebulaColors, 3));

    const nebulaMaterial = new THREE.PointsMaterial({
      size: isMobile ? 1.8 : 3.0,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: isMobile ? 0.45 : 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 4;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 4;
    };

    // Scroll Tracking
    let scrollY = 0;
    let targetScrollY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Animation Loop
    let clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (lerp)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Apply rotations and offsets
      nebula.rotation.y = elapsedTime * 0.02 + mouseX * 0.06;
      nebula.rotation.x = elapsedTime * 0.01 + mouseY * 0.06;
      
      // Scroll parallax: translate nebula particles slightly downwards as scroll increases
      nebula.position.y = -scrollY * 0.008;
      starField.position.y = -scrollY * 0.003; // slower parallax for stars

      // Rotate background stars slowly
      starField.rotation.y = -elapsedTime * 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      starsGeometry.dispose();
      starsMaterial.dispose();
      nebulaGeometry.dispose();
      nebulaMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[#050505]"
    />
  );
}
