"use client";
import styles from '@/styles/WhyUs.module.css';
import { motion } from 'framer-motion';

const points = [
  { title: 'Prix malins', desc: 'Des prix imbattables grâce au déstockage et au reconditionné.' },
  { title: 'Qualité testée', desc: 'Chaque produit est vérifié et prêt à l’emploi.' },
  { title: 'Anti-gaspillage', desc: 'Donner une seconde vie aux objets, c’est bon pour la planète.' },
  { title: 'Arrivages réguliers', desc: 'De nouvelles trouvailles chaque semaine.' }
];

export function WhyUs() {
  return (
    <section className={styles.section} aria-labelledby="whyus-title">
      <h2 id="whyus-title">Pourquoi nous choisir ?</h2>
      <div className={styles.grid}>
        {points.map((p, index) => (
          <motion.div
            key={p.title}
            className={styles.card}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

