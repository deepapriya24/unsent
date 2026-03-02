import { useState } from 'react';

export default function MessageForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!name.trim() && !content.trim()) {
      setError('This feels a little empty.');
      return;
    }
    if (!name.trim()) {
      setError('Who are you writing to?');
      return;
    }
    if (!content.trim()) {
      setError('Maybe write a little more?');
      return;
    }

    setSaving(true);
    try {
      await onSubmit(name.trim(), content.trim());
      setName('');
      setContent('');
    } catch (err) {
      setError(err.message || 'Something went quiet on our end.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="form-card">
      <input
        className="form-input"
        type="text"
        placeholder="Who are you writing to?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
      />
      <textarea
        className="form-textarea"
        placeholder="Write what you couldn't say."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
      />
      {error && <p className="form-error">{error}</p>}
      <button
        className="form-button"
        onClick={handleSubmit}
        disabled={saving}
      >
        {saving ? 'Saving...' : 'Keep it safe'}
      </button>
    </div>
  );
}
