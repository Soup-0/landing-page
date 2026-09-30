import "./globals.css";

export const metadata = {
  title: "Next.js App",
  description: "Starter Next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
