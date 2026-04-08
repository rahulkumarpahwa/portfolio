'use client';

import { heroConfig } from '@/config/Hero';
import { motion } from 'framer-motion';

const Introduction = () => {
  const { title, description, skills } = heroConfig;

  // Process description template
  let descriptionText = description.template;
  skills.forEach((skill, index) => {
    descriptionText = descriptionText.replace(`{skills:${index}}`, skill.name);
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="space-y-8 py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="bg-accent h-1 w-12 rounded-full" />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-muted-foreground max-w-3xl text-base leading-relaxed md:text-lg"
      >
        {descriptionText}
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-4">
        {skills.slice(0, 8).map((skill) => (
          <span
            key={skill.name}
            className="bg-muted text-foreground border-border hover:border-accent rounded-full border px-3 py-1 text-sm font-medium transition-colors duration-200"
          >
            {skill.name}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
