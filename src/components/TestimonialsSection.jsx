import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Отзывы наших пользователей</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>«Nerito упростил коммуникацию в нашей команде в разы. Интуитивно, быстро и стабильно!»</p>
            <div className={styles.author}>— Анна, проджект-менеджер</div>
          </div>
          <div className={styles.card}>
            <p>«Лучший чат для фрилансеров. Ничего лишнего и всё, что нужно — на месте.»</p>
            <div className={styles.author}>— Михаил, веб-разработчик</div>
          </div>
          <div className={styles.card}>
            <p>«Переехали с Slack и не пожалели. Nerito — это то, как должен выглядеть современный чат.»</p>
            <div className={styles.author}>— Ольга, HR</div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* JSX testimonials section */
