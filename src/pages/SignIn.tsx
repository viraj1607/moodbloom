import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-teal-50 to-blue-100 dark:from-gray-900 dark:to-gray-950">
      <div className="w-full max-w-md p-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-1">Welcome Back</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Sign in to continue your MoodBloom journey 🌿</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400 dark:text-white">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal-600 hover:underline dark:text-teal-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
