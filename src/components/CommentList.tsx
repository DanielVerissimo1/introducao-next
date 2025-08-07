'use client'

import Comment from './Comment';

interface CommentData {
  id: string;
  author: string;
  text: string;
  date: string;
}

interface CommentListProps {
  comments: CommentData[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Comentários ({comments.length})</h2>
      {comments.length === 0 ? (
        <p className="text-gray-500">Nenhum comentário ainda. Seja o primeiro a comentar!</p>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            text={comment.text}
            date={comment.date}
          />
        ))
      )}
    </div>
  );
}