import "./CommentUI.css";

const CommentUI = ({ value }) => {
  return (
    <div className="comment__section-ui">
      <span>{value}</span>
    </div>
  );
};

export default CommentUI;
