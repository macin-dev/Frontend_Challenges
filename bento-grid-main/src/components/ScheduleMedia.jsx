import styles from "./ScheduleMedia.module.scss";

function ScheduleMedia(){
    return (
        <section className={styles.scheduleMedia}>
            <h2>Schedule to social media.</h2>
            <img src="/src/assets/images/illustration-schedule-posts.webp" alt="Schedule Media" />
            <span className={styles.scheduleMediaText}>Optimize post timings to publish content at the perfect time for your audience.</span>
        </section>
    )
}

export default ScheduleMedia