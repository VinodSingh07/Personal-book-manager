"use client";

import { useState } from "react";
import API from "@/services/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const res = await API.post("/auth/signup", {
        name,
        email,
        password,
      });

      // save token after signup
      localStorage.setItem("token", res.data.token);

      // go directly to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account ✨
        </h1>

        <input
          placeholder="Name"
          required
          className="w-full text-black border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          required
          placeholder="Email"
          className="w-full text-black border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          required
          placeholder="Password"
          className="w-full text-black border rounded-lg p-3 mb-6 focus:ring-2 focus:ring-purple-400 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-6 text-gray-500">
          Already have an account?
          <Link href="/login" className="text-purple-500 ml-1 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
