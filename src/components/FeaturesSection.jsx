import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2 className={styles.heading}>Что умеет Nerito?</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🗂 Многокомнатные чаты</h3>
            <p>Создавай отдельные каналы для проектов, отделов или клиентов.</p>
          </div>
          <div className={styles.card}>
            <h3>🧑‍💼 Командный доступ</h3>
            <p>Приглашай коллег, управляй правами, следи за активностью.</p>
          </div>
          <div className={styles.card}>
            <h3>📥 Файлообмен</h3>
            <p>Передавай файлы любого типа — быстро и без ограничений.</p>
          </div>
          <div className={styles.card}>
            <h3>📱 Мобильная поддержка</h3>
            <p>Работай из любого устройства — в браузере или приложении.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
/* JSX features section */
