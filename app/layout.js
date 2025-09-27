import "./globals.css";
import { getDocuments } from "@/lib/doc"; 

export const metadata = {
  title: "DocuCraft - A documentation website by protocol",
  description: "A documentation website by protocol"
}


export default function RootLayout({ children }) {
  const allDocuments = getDocuments();
  console.log(allDocuments)
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
