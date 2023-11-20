import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-between items-center py-4 px-6">
        <li>
          <Link href="/"  className="text-gray-300 hover:text-white">Home</Link>
        </li>
        <li>
          <Link href="/garage"  className="text-gray-300 hover:text-white">Garage</Link>
        </li>
        <li>
          <Link href="/profile"  className="text-gray-300 hover:text-white">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
