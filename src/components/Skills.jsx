import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "HPC & Parallel Computing": ["CUDA", "OpenMP", "MPI", "Pthreads", "GPU/CPU optimisation"],
        "Machine Learning & AI": ["PyTorch", "TensorFlow", "Scikit-Learn", "MLOps", "Mixed-precision training"],
        "Big Data & Distributed Systems": ["Spark", "Hadoop", "Polars", "RAPIDS", "Cloud architectures"],
        "Development": ["Python", "C/C++", "Java", "SQL", "JavaScript", "ReactJS", "FastAPI"],
        "DevOps & Infrastructure": ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "PostgreSQL", "MySQL"]
    };

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 relative border-t border-white/5">
            <motion.h2
                className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-16 text-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                TECHNICAL SKILLS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full px-6">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={index}
                        className="relative p-6 border border-white/10 rounded-lg bg-black/40 hover:bg-white/5 transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3 className="text-lg font-exo2 font-bold text-white mb-6 border-b border-neon-lime/30 pb-2 inline-block">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs font-inter text-neon-lime border border-neon-lime/20 rounded-full bg-neon-lime/5 hover:bg-neon-lime/10 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
