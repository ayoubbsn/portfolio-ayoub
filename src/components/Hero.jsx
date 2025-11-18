import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <>
            <color attach="background" args={['#000000']} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#aaff00" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />

            <TorusKnot ref={meshRef} args={[10, 3, 100, 16]} position={[0, 0, -5]} rotation={[0, 0, 0]}>
                <meshStandardMaterial
                    color="#aaff00"
                    wireframe
                    transparent
                    opacity={0.1}
                    emissive="#aaff00"
                    emissiveIntensity={0.2}
                />
            </TorusKnot>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </>
    );
};

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
                    <AnimatedBackground />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
                <motion.h1
                    className="font-orbitron font-black text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-tighter leading-tight"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
                >
                    AYOUB <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">BOUSNANE</span>
                </motion.h1>

                <motion.h2
                    className="font-exo2 text-neon-lime text-xl md:text-3xl mb-4 tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8, duration: 1 }}
                >
                    Machine Learning & HPC Engineer
                </motion.h2>

                <motion.p
                    className="font-inter text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    Based in Paris · Immediately available for a permanent position
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                >
                    <a href="#experience" className="inline-block group relative px-8 py-4 bg-black border-2 border-neon-lime text-white font-orbitron font-bold text-lg tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(170,255,0,0.5)]">
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">View My Work</span>
                        <div className="absolute inset-0 bg-neon-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 4, duration: 1 }}
            >
                <span className="text-xs font-exo2 tracking-widest text-neon-lime">SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-neon-lime to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
