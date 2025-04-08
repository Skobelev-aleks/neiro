import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>Почему Nerito?</h2>
        <p className={styles.text}>
          Мы создаём чат, который не просто удобен — он делает работу быстрее и продуктивнее.
          Никакой сложности, только нужные функции, минимализм и скорость.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>⚡ Быстрый</h3>
            <p>Молниеносная загрузка и отклик. Nerito не тормозит, даже если вы ведёте 20 чатов одновременно.</p>
          </div>
          <div className={styles.feature}>
            <h3>🔒 Безопасный</h3>
            <p>Шифрование, защита от спама, контроль доступа — всё на высшем уровне.</p>
          </div>
          <div className={styles.feature}>
            <h3>🎯 Простой</h3>
            <p>Интерфейс, понятный даже бабушке. Чистый дизайн, никакого мусора.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
/* JSX about section */
