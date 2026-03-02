import MessageCard from './MessageCard';

export default function MessageList({ messages, onDelete }) {
  if (messages.length === 0) {
    return (
      <div className="empty-state">
        <p>Your thoughts will rest here quietly.</p>
      </div>
    );
  }

  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageCard key={message._id} message={message} onDelete={onDelete} />
      ))}
    </div>
  );
}
