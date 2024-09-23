import styles from "@/styles/global.css"

export const metadata = {
  title: "next.js-simple-form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
