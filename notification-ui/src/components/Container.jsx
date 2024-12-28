import Header from "./Header.jsx";
import Tabs from "./Tabs.jsx";
import UserNotification from "./UserNotification.jsx";
import NotificationContent from "./NotificationContent.jsx";
import { newNotifications } from "../../data/index.js";
import "./Container.css";

function Container() {
  return (
    <main className="container">
      <Header />
      <Tabs />
      <NotificationContent>
        {newNotifications.map((list) => (
          <UserNotification
            key={list.id}
            profile_img={list.profile_img}
            username={list.username}
            action={list.action}
            action_icon={list.action_icon}
            dropdown={list.dropdown}
            date={list.date}
            time={list.time}
            invited_event={list.invited_event}
            action_type={list.action_type}
          />
        ))}
      </NotificationContent>
    </main>
  );
}

export default Container;
