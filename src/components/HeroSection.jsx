import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Добро пожаловать в Nerito</h1>
        <p className={styles.subtitle}>
          Общайся легко. Работай эффективно. Nerito — чат нового поколения.
        </p>
        <div className={styles.actions}>
          <a href="#features" className={styles.primaryBtn}>Попробовать</a>
          <a href="#contact" className={styles.secondaryBtn}>Связаться с нами</a>
        </div>
      </div>
    </section>
  );
}
