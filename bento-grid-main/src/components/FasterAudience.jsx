import styles from "./FasterAudience.module.scss";

function FasterAudience() {
    return (
        <section className={styles.audienceSection}>
            <h2 className={styles.audienceGrowth}> &gt;56%</h2>
            <span className={styles.audienceText}>faster audience growth</span>
            <img src="/src/assets/images/illustration-audience-growth.webp" alt="Audience growth" />
        </section>
    )
}

export default FasterAudience;