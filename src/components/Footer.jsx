import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <p className={styles.logo}>Nerito</p>
        <nav className={styles.nav}>
          <a href="#about">О нас</a>
          <a href="#features">Функции</a>
          <a href="#pricing">Цены</a>
          <a href="#contact">Контакты</a>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} Nerito. Все права защищены.</p>
      </div>
    </footer>
  );
}
/* JSX footer section */
