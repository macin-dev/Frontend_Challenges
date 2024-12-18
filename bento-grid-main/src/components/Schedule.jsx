import styles from "./Schedule.module.scss";

function Schedule() {
    return <section className={styles.schedule}>
        <h2 className={styles.scheduleText}>Maintain a consistent posting schedule.</h2>
        <img src="/src/assets/images/illustration-consistent-schedule.webp" alt="Schedule"/>
    </section>
}


export default Schedule;