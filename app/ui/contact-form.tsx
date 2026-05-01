'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = e.target;

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      })
    });

    if (res.ok) setMessage('Sent!');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" placeholder="Name" className="border p-2" required />
      <input name="email" placeholder="Email" className="border p-2" required />
      <textarea name="message" placeholder="Message" className="border p-2" required />
      <button className="bg-blue-500 text-white p-2">Send</button>
      <p>{message}</p>
    </form>
  );
}
