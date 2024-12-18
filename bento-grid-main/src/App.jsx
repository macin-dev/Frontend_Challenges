import SocialMedia from "./components/SocialMedia.jsx";
import MultiplePlatforms from "./components/MultiplePlatforms.jsx";
import Schedule from "./components/Schedule.jsx";
import ScheduleMedia from "./components/ScheduleMedia.jsx";
import GrowFollowers from "./components/GrowFollowers.jsx";
import FasterAudience from "./components/FasterAudience.jsx";
import ContentQuicker from "./components/ContentQuicker.jsx";
import WriteContent from "./components/WriteContent.jsx";

import styles from "./index.module.scss";

function App() {
    return (
        <main className={styles.app}>
            <SocialMedia/>
            <MultiplePlatforms />
            <Schedule />
            <ScheduleMedia />
            <GrowFollowers />
            <FasterAudience />
            <ContentQuicker />
            <WriteContent />
        </main>
    )
}

export default App;