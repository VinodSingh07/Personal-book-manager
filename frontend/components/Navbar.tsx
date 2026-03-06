"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 shadow bg-white">
      <Link href="/dashboard">
        <h1 className="text-xl font-bold text-blue-600">📚 Book Manager</h1>
      </Link>

      <div className="flex gap-4">
        <Link href="/add-book">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Book
          </button>
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
