"use client";
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from '@/styles/Products.module.css';
import { products } from '@/data/products';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Nos produits</h1>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.article
              key={product.name + index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={styles.content}>
                <h3>{product.name}</h3>
                <p className={styles.category}>{product.category}</p>
                <p>{product.description}</p>
                <p className={styles.price}>à partir de {product.price}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

