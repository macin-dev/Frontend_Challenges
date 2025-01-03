function UserPhoto({ username, action, date, time, invited_event }) {
  return (
    <div className="user__notification-content">
      <div className="notification__content-sub">
        <span className="notification__user-action">
          <strong className="notification__user-name">@{username} </strong>
          {action}
          <strong> {invited_event}</strong>
        </span>
        <span className="notification__date">
          {date} {time}
        </span>
      </div>
      <span className="notification__posting-time">2 hours ago</span>
    </div>
  );
}

export default UserPhoto;
