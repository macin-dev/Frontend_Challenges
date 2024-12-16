import styles from "./MultiplePlatforms.module.scss";

function MultiplePlatforms() {
    return (
        <div className={styles.multiplePlatforms}>
            <img src="/src/assets/images/illustration-multiple-platforms.webp" alt="Multiple Platforms" />
            <h2 className={styles.multiplePlatformText}>Manage multiple accounts and platforms</h2>
        </div>
    )
}

export default MultiplePlatforms;