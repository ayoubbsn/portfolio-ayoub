import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Machine Learning Engineer",
            company: "Decathlon Digital",
            location: "Paris",
            period: "March – September 2025",
            details: [
                "Fully optimised a demand-forecasting ML pipeline: migrated from Pandas/PySpark to Polars + RAPIDS.",
                "Cut operational costs by 90% and achieved a 20× speed-up on GPU/CPU HPC clusters.",
                "Developed a systematic benchmarking framework for precise resource evaluation.",
                "Improved training and inference throughput by 2.2× via mixed-precision optimisation."
            ]
        },
        {
            role: "Software Engineer",
            company: "ESI Research Lab",
            location: "Algiers",
            period: "January – July 2024",
            details: [
                "Designed and developed a centralised platform for API discovery and integration.",
                "Built a microservices architecture with automated testing and Docker containerisation.",
                "Implemented CI/CD pipelines and automated deployments."
            ]
        },
        {
            role: "Full-Stack Developer",
            company: "Sonatrach",
            location: "Algiers",
            period: "August – October 2023",
            details: [
                "Designed a relational database architecture for an industrial management system.",
                "Developed a modern user interface with ReactJS and RESTful APIs."
            ]
        }
    ];

    return (
        <section id="experience" className="min-h-screen flex flex-col items-center justify-center py-20 relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            <motion.h2
                className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-16 text-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                EXPERIENCE
            </motion.h2>

            <div className="max-w-4xl w-full px-6 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-8 border-l-2 border-white/10 hover:border-neon-lime transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-neon-lime rounded-full shadow-[0_0_10px_#aaff00]"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <h3 className="text-2xl font-exo2 font-bold text-white">{exp.role}</h3>
                            <span className="text-neon-lime font-inter text-sm tracking-wider">{exp.period}</span>
                        </div>

                        <div className="text-gray-400 font-orbitron text-sm mb-6">
                            {exp.company} <span className="mx-2">·</span> {exp.location}
                        </div>

                        <ul className="space-y-3">
                            {exp.details.map((detail, i) => (
                                <li key={i} className="text-gray-300 font-inter leading-relaxed flex items-start">
                                    <span className="text-neon-lime mr-3 mt-1.5 text-xs">►</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
