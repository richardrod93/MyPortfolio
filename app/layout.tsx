import './ui/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="p-6">{children}</body>
    </html>
  );
}
