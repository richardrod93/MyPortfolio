import ContactForm from './ui/contact-form';

export default function Page() {
  return (
    <main className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      <p className="mb-8">Welcome. Contact me below.</p>
      <ContactForm />
    </main>
  );
}
