import CommentUI from "./CommentUI";
import InvitedEventUI from "./InvitedEventUI";
import "./DisplayContent.css";

const DisplayContent = ({ action_type, content }) => {
  return (
    <aside className="notification__content-dropdown">
      {action_type === "comment-type" ? <CommentUI value={content} /> : ""}
      {action_type === "invited__event-type" ? <InvitedEventUI /> : ""}
    </aside>
  );
};

export default DisplayContent;
