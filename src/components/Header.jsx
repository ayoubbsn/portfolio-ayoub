import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const navLinks = ['Experience', 'Education', 'Skills', 'Contact'];

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md border-b border-white/10 rounded-b-[20px] mx-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/5">
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-neon-lime/50 to-transparent"></div>
            </div>

            <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto">
                {/* Logo */}
                <div className="text-2xl font-orbitron font-bold text-white tracking-wider cursor-pointer group">
                    Ayoub<span className="text-neon-lime group-hover:text-shadow-glow transition-all duration-300">.B</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="relative text-light-gray hover:text-white transition-colors duration-300 font-exo2 text-sm uppercase tracking-wide group"
                        >
                            {link}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-neon-lime transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#aaff00]"></span>
                        </a>
                    ))}
                </nav>

                {/* Contact Button */}
                <a href="#contact" className="relative overflow-hidden bg-neon-lime text-black font-orbitron font-bold text-sm px-6 py-2 rounded-sm hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(170,255,0,0.4)] hover:shadow-[0_0_25px_rgba(170,255,0,0.6)]">
                    Contact Me
                </a>
            </div>
        </motion.header>
    );
};

export default Header;
