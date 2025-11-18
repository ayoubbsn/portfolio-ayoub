import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            degree: "MSc High-Performance Computing and Simulation",
            school: "Université Paris-Saclay",
            period: "2024 – 2025",
            details: "Joint programme with ENS Paris-Saclay, Télécom SudParis, and UVSQ. Graduate."
        },
        {
            degree: "Engineering Degree in Computer Science",
            school: "National Higher School of Computer Science (ESI), Algiers",
            period: "2019 – 2024",
            details: "Honours"
        }
    ];

    return (
        <section id="education" className="min-h-[50vh] flex flex-col items-center justify-center py-20 relative border-t border-white/5">
            <motion.h2
                className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-16 text-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                EDUCATION
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-6">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="p-8 border border-white/10 bg-white/5 rounded-xl hover:border-neon-lime/50 transition-all duration-300 group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <h3 className="text-xl font-exo2 font-bold text-neon-lime mb-2 group-hover:text-shadow-glow">{edu.degree}</h3>
                        <div className="text-white font-orbitron mb-4">{edu.school}</div>
                        <div className="flex justify-between items-center text-sm text-gray-400 font-inter">
                            <span>{edu.period}</span>
                            <span>{edu.details}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
