import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpWithEmail } from "../services/auth";

export default function SignUp() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate=useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signUpWithEmail(fullName, email, password);
      console.log("success signup", res);
      navigate("/signin")
      setFullName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-teal-50 to-blue-100 dark:from-gray-900 dark:to-gray-950">
      <div className="w-full max-w-md p-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-1">
          Create an Account
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Start tracking your mood and journaling today 🌸
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
              placeholder="Your name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-teal-600 hover:underline dark:text-teal-400"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
