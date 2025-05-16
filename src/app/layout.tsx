import "../app/globals.css";
import { ReactQueryClientProvider } from "../lib/ReactQueryClientProvider";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: " Magic Search",
  description: "Pesquise cartas de Magic the Gathering facilmente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ReactQueryClientProvider>
          <Navbar />
          <main className="max-w-4xl mx-auto p-4">{children}</main>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
