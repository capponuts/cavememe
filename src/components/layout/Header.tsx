import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { Store, Info, Package, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Accueil La Caverne de Mémé">
          <Store aria-hidden="true" />
          <span>La Caverne de Mémé</span>
        </Link>
        <nav aria-label="Navigation principale" className={styles.nav}>
          <Link href="/" className={styles.link}><Store size={16} aria-hidden="true" /> Accueil</Link>
          <Link href="/about" className={styles.link}><Info size={16} aria-hidden="true" /> À Propos</Link>
          <Link href="/products" className={styles.link}><Package size={16} aria-hidden="true" /> Produits</Link>
          <Link href="/contact" className={styles.link}><Phone size={16} aria-hidden="true" /> Contact</Link>
        </nav>
      </div>
    </header>
  );
}

