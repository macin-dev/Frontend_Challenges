import SocialMedia from "./components/SocialMedia.jsx";
import MultiplePlatforms from "./components/MultiplePlatforms.jsx";

import styles from "./index.module.scss";

function App() {
    return (
        <main className={styles.app}>
            <SocialMedia/>
            <MultiplePlatforms />
        </main>
    )
}

export default App;