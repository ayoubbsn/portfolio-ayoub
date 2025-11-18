import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center py-20 relative border-t border-white/5 bg-gradient-to-b from-matte-black to-black">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            <motion.div
                className="text-center max-w-2xl px-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8 text-glow">
                    LET'S CONNECT
                </h2>

                <p className="text-gray-400 font-inter text-lg mb-12 leading-relaxed">
                    I am currently based in Paris and immediately available for a permanent position.
                    Let's discuss how I can contribute to your team.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <a
                        href="mailto:ayoubbousnane1@gmail.com"
                        className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-lg hover:border-neon-lime hover:bg-neon-lime/10 transition-all duration-300"
                    >
                        <span className="text-neon-lime text-xl">✉</span>
                        <span className="text-white font-exo2 tracking-wide group-hover:text-neon-lime transition-colors">ayoubbousnane1@gmail.com</span>
                    </a>

                    <a
                        href="tel:+33748403240"
                        className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-lg hover:border-neon-lime hover:bg-neon-lime/10 transition-all duration-300"
                    >
                        <span className="text-neon-lime text-xl">📞</span>
                        <span className="text-white font-exo2 tracking-wide group-hover:text-neon-lime transition-colors">+33 7 48 40 32 40</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/ayoub-bousnane"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-lg hover:border-neon-lime hover:bg-neon-lime/10 transition-all duration-300"
                    >
                        <span className="text-neon-lime text-xl">in</span>
                        <span className="text-white font-exo2 tracking-wide group-hover:text-neon-lime transition-colors">LinkedIn</span>
                    </a>
                </div>
            </motion.div>

            <footer className="absolute bottom-0 w-full py-8 text-center border-t border-white/10 text-gray-600 font-exo2 text-sm">
                &copy; 2025 Ayoub BOUSNANE. All rights reserved.
            </footer>
        </section>
    );
};

export default Contact;
