import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from '@/styles/About.module.css';

export const metadata = {
  title: 'À Propos | La Caverne de Mémé'
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section>
          <h1>À propos</h1>
          <p>
            Née d’une passion pour les bonnes affaires et la seconde vie des objets, La Caverne de Mémé tire son nom des 
            trésors que l’on trouvait autrefois chez nos grands-mères: utiles, robustes, et toujours à prix malins.
          </p>
        </section>
        <section>
          <h2>Notre philosophie</h2>
          <p>
            Nous croyons à l’économie circulaire: prolonger la durée de vie des produits, réduire le gaspillage, et offrir des 
            prix accessibles à tous. Nos articles reconditionnés sont testés, nettoyés et prêts à servir longtemps.
          </p>
        </section>
        <section>
          <h2>Le magasin</h2>
          <p>
            Situé à Legé (44), notre magasin vous accueille pour découvrir une sélection changeante au fil des arrivages: 
            high-tech, électroménager, gadgets, et plus encore.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

