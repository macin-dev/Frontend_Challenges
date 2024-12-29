import Liked from "./Liked";

function UserPhoto({ profile_img, username, action_icon }) {
  return (
    <div className="notification__user-avatar">
      <img src={profile_img} alt={username} />
      {action_icon ? <Liked /> : ""}
    </div>
  );
}

export default UserPhoto;
