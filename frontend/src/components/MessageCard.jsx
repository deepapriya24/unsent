import { useState } from 'react';

export default function MessageCard({ message, onDelete }) {
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    setDeleting(true);
    try {
      await onDelete(message._id);
    } catch {
      setDeleting(false);
      setConfirming(false);
    }
  }

  return (
    <div className={`message-card ${deleting ? 'message-card--fading' : ''}`}>
      <p className="message-to">To: {message.name}</p>
      <p className="message-content">{message.content}</p>
      <button
        className={`message-delete ${confirming ? 'message-delete--confirm' : ''}`}
        onClick={handleDelete}
        onBlur={() => setConfirming(false)}
        disabled={deleting}
      >
        {deleting ? 'Releasing...' : confirming ? 'Let it go?' : 'Release'}
      </button>
    </div>
  );
}
