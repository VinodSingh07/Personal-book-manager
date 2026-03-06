"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="relative flex justify-between items-center px-6 py-4 bg-gradient-to-r from-slate-900/95 via-purple-900/20 to-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/10 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/5 before:to-pink-500/5 before:rounded-2xl before:blur-xl">
      {/* Logo */}
      <Link href="/dashboard">
        <h1 className="group bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent text-2xl font-black tracking-tight drop-shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer select-none">
          📚 Book Manager
        </h1>
      </Link>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Link href="/add-book">
          <button className="group relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-2xl shadow-purple-500/25 hover:shadow-3xl hover:shadow-purple-500/40 active:scale-95 transform transition-all duration-300 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:blur-sm before:opacity-0 group-hover:before:opacity-100">
            <FaPlus
              size={14}
              className="ml-1 group-hover:animate-pulse transition-transform duration-300"
            />
            Add Book
          </button>
        </Link>

        <button
          onClick={logout}
          className="group relative bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-2xl shadow-red-500/25 hover:shadow-3xl hover:shadow-red-500/40 active:scale-95 transform transition-all duration-300 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:blur-sm before:opacity-0 group-hover:before:opacity-100"
        >
          <FaSignOutAlt
            size={14}
            className="ml-1 group-hover:rotate-180 transition-transform duration-500"
          />
          Logout
        </button>
      </div>
    </div>
  );
}
