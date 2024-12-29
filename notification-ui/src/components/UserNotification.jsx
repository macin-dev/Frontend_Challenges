import UserPhoto from "./UserPhoto.jsx";
import UserContent from "./UserContent.jsx";
import Indicator from "./Indicator.jsx";
import DisplayContent from "./DisplayContent.jsx";

import "./UserNotification.css";

function UserNotification({
  profile_img,
  username,
  action,
  action_icon,
  dropdown,
  invited_event,
  date,
  time,
  action_type,
}) {
  return (
    <section className="notification__grid">
      <aside className="user__notification">
        <UserPhoto
          profile_img={profile_img}
          username={username}
          action_icon={action_icon}
        />
        <UserContent
          action={action}
          username={username}
          date={date}
          time={time}
          invited_event={invited_event}
        />
        <Indicator />
      </aside>
      <DisplayContent action_type={action_type} content={dropdown} />
    </section>
  );
}

export default UserNotification;
