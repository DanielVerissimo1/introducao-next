'use client'

interface CommentProps {
  author: string;
  text: string;
  date: string;
}

export default function Comment({ author, text, date }: CommentProps) {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{author}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}