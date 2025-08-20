import styles from '@/styles/Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} La Caverne de Mémé — Legé (44)</p>
        <nav aria-label="Liens secondaires" className={styles.nav}>
          <a href="/" className={styles.link}>Mentions légales</a>
          <a href="/" className={styles.link}>Politique de confidentialité</a>
        </nav>
      </div>
    </footer>
  );
}

