import { Comment } from '@/lib/type';

export default function OneCommentForm({ comment }: { comment: Comment }) {
  return (
    <div className="OneCommentForm flex">
      <div className="authorTeaCard">
        <img src={comment.User.avatar} alt="avatar author" />
        <p>{comment.User.userName}</p>
      </div>

      <p>💬{comment.commentText}</p>
    </div>
  );
}
