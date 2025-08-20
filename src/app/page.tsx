"use client";
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';
import { Categories } from '@/components/sections/Categories';
import { WhyUs } from '@/components/sections/WhyUs';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            La caverne aux trésors de Legé
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            Déstockage malin et produits reconditionnés: faites des économies tout en luttant contre le gaspillage.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link className={styles.cta} href="/contact">Nous contacter</Link>
          </motion.div>
        </section>
        <Categories />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}