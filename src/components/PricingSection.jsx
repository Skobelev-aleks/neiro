import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <h2 className={styles.heading}>Выбери свой тариф</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Бесплатный</h3>
            <p className={styles.price}>0 ₽ / месяц</p>
            <ul>
              <li>До 5 участников</li>
              <li>Базовые функции</li>
              <li>Ограниченный доступ к истории</li>
            </ul>
            <button className={styles.btn}>Выбрать</button>
          </div>

          <div className={`${styles.card} ${styles.pro}`}>
            <h3>Pro</h3>
            <p className={styles.price}>499 ₽ / месяц</p>
            <ul>
              <li>До 50 участников</li>
              <li>Полный доступ ко всем функциям</li>
              <li>Поддержка 24/7</li>
            </ul>
            <button className={styles.btn}>Начать</button>
          </div>
        </div>
      </div>
    </section>
  );
}
/* JSX pricing section */
