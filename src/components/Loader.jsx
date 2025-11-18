import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500); // Wait for exit animation
        }, 2000);
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-matte-black overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Glitch Static Background Effect (CSS Simulation) */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 animate-pulse"></div>
                    </div>

                    {/* Laser Scan Bar */}
                    <motion.div
                        className="absolute w-full h-[5px] bg-neon-lime shadow-[0_0_20px_#aaff00]"
                        initial={{ top: '-10%' }}
                        animate={{ top: '110%' }}
                        transition={{
                            duration: 2,
                            ease: [0.22, 1, 0.36, 1], // Cubic-bezier easing
                            repeat: 0
                        }}
                    />

                    {/* Loading Text/Logo (Optional, but adds to the effect) */}
                    <motion.div
                        className="relative z-10 text-neon-lime font-orbitron text-2xl tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.5, 1, 0] }}
                        transition={{ duration: 2, times: [0, 0.1, 0.5, 0.8, 1] }}
                    >
                        INITIALIZING...
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
