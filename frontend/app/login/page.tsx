"use client";

import { useState } from "react";
import API from "@/services/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to manage your books
        </p>

        <input
          type="email"
          placeholder="abc@gmail.com"
          required
          className="w-full text-black mb-4 p-3 rounded-lg border border-gray-400 bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          required
          placeholder="123****"
          className="w-full text-black mb-4 p-3 rounded-lg border border-gray-400 bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
        >
          Login
        </button>

        <p className="text-sm text-center mt-6 text-gray-500">
          Don't have an account?
          <Link href="/signup" className="text-blue-500 ml-1 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
