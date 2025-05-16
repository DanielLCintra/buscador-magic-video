import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/magic-logo.png"
            alt="Magic: The Gathering Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </Link>
        <div>
          <Link href="/" className="mr-4 hover:text-pink-400">
            Busca
          </Link>
          <Link href="/favorites" className="hover:text-pink-400">
            Favoritos
          </Link>
        </div>
      </div>
    </nav>
  );
}
