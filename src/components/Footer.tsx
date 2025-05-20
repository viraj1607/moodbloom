export default function Footer() {
    return (
      <footer className="bg-slate-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo / App Name */}
          <div className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">
            MoodBloom
          </div>
  
          {/* Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Home</a>
            <a href="/journal" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Journal</a>
            <a href="/dashboard" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Dashboard</a>
            <a href="/privacy" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Privacy</a>
          </div>
        </div>
  
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 pb-4">
          © {new Date().getFullYear()} MoodBloom. All rights reserved.
        </div>
      </footer>
    );
  }
  