import styles from "./WriteContent.module.scss";

function WriteContent() {
    return <section className={styles.contentSection}>
        <h2 className={styles.contentTitle}>Write your content using AI.</h2>
        <img src="/src/assets/images/illustration-ai-content.webp" alt="AI Chat"/>
    </section>
}

export default WriteContent;