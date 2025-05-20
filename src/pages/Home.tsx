import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 text-center py-20 md:py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 dark:from-teal-300 dark:to-blue-300">
          Welcome to MoodBloom
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
          A calm, private space to reflect, write, and discover how you truly feel.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 text-white text-sm font-medium rounded-xl bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 shadow-lg transition"
          >
            Get Started
          </Link>
          <Link
            to="/signin"
            className="px-6 py-3 text-sm font-medium rounded-xl text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            Already have an account?
          </Link>
        </div>

        {/* Soft illustration
        <img
          src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
          alt="Journaling Illustration"
          className="w-40 mt-12 opacity-90 dark:opacity-80"
        /> */}
      </section>

      {/* Feature Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Why MoodBloom?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We help you understand your emotions, build mindfulness, and track how you're truly doing.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-slate-100 dark:bg-gray-700 rounded-xl p-6 shadow-md text-left hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Daily Journaling</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Reflect on your day in a quiet, private space built just for you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-100 dark:bg-gray-700 rounded-xl p-6 shadow-md text-left hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Mood Insights</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Let AI gently help you understand your emotional trends over time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-100 dark:bg-gray-700 rounded-xl p-6 shadow-md text-left hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Dashboard</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Visualize your moods and find balance with a beautiful mood-tracking dashboard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
