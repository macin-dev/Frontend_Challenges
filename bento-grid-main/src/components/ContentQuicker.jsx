import styles from './ContentQuicker.module.scss';

function ContentQuicker() {
    return (
        <section className={styles.contentSection}>
            <h2 className={styles.contentTitle}>Create and schedule content <span className={styles.contentSubTitle}>quicker</span></h2>
            <img src="/src/assets/images/illustration-create-post.webp" alt="create post" />
        </section>
    )
}

export default ContentQuicker;