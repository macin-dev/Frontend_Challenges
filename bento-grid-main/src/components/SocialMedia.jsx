import styles from "./SocialMedia.module.scss";
import Rating from "./Rating.jsx";

function SocialMedia() {
    return (
        <div className={styles.socialMedia}>
            <h1>Social Media <span className={styles.socialMediaNumber}>10x</span> <span className={styles.socialMediaItalic}>Faster</span> with AI</h1>
            <div className={styles.socialMediaBox}>
                <Rating />
                <span className={styles.socialMediaText}>Over 4,000 5-star reviews</span>
            </div>
        </div>
    )
}

export default SocialMedia;