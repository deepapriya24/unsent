import { useState, useEffect } from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import { fetchMessages, createMessage, deleteMessage } from './api';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    try {
      const data = await fetchMessages();
      setMessages(data);
    } catch {
      setError('Could not reach the quiet place right now.');
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(name, content) {
    const newMessage = await createMessage(name, content);
    setMessages((prev) => [newMessage, ...prev]);
  }

  async function handleDelete(id) {
    await deleteMessage(id);
    setMessages((prev) => prev.filter((m) => m._id !== id));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Unsent</h1>
        <p className="app-tagline">
          When you're ready, this space is here for you —<br />
          your words are safe and only yours.
        </p>
      </header>

      <main className="app-main">
        <MessageForm onSubmit={handleCreate} />
        {error && <p className="app-error">{error}</p>}
        {loading ? (
          <p className="app-loading">Gathering your thoughts...</p>
        ) : (
          <MessageList messages={messages} onDelete={handleDelete} />
        )}
      </main>
    </div>
  );
}