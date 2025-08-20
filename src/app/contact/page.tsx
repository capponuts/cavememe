"use client";
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from '@/styles/Contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!form.name.trim()) nextErrors.name = 'Votre nom est requis.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = "Email invalide.";
    if (form.message.trim().length < 10) nextErrors.message = 'Message trop court (10 caractères min).';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Contact</h1>
        <div className={styles.grid}>
          <section className={styles.formSection}>
            {submitted ? (
              <p role="status" className={styles.success}>Merci pour votre message ! Nous vous répondrons rapidement.</p>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="name">Nom</label>
                  <input id="name" name="name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required aria-invalid={!!errors.name} aria-describedby="name-error" />
                  {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required aria-invalid={!!errors.email} aria-describedby="email-error" />
                  {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required aria-invalid={!!errors.message} aria-describedby="message-error" />
                  {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
                </div>
                <button type="submit" className={styles.submit}>Envoyer</button>
              </form>
            )}
          </section>
          <section className={styles.infoSection}>
            <h2>Informations</h2>
            <p>Adresse: 123 Rue de la Mémé, 44650 Legé</p>
            <p>Téléphone: 02 00 00 00 00</p>
            <p>Horaires: Mar-Sam 10:00 - 19:00</p>
            <div className={styles.mapWrapper}>
              <iframe
                title="Carte du magasin"
                src="https://www.google.com/maps?q=Leg%C3%A9%2C%2044650&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

