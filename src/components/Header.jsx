import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Nerito</div>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#about">О нас</a>
          <a href="#features">Функции</a>
          <a href="#pricing">Цены</a>
          <a href="#contact">Контакты</a>
        </nav>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Открыть меню"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>
    </header>
  );
}