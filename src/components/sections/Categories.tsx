"use client";
import styles from '@/styles/Categories.module.css';
import { Smartphone, Plug, Sparkles, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { icon: Smartphone, label: 'High-tech' },
  { icon: Plug, label: 'Électroménager' },
  { icon: Headphones, label: 'Audio' },
  { icon: Sparkles, label: 'Gadgets' }
];

export function Categories() {
  return (
    <section className={styles.section} aria-labelledby="categories-title">
      <h2 id="categories-title">Nos catégories</h2>
      <div className={styles.grid}>
        {categories.map(({ icon: Icon, label }, index) => (
          <motion.div
            key={label}
            className={styles.item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

