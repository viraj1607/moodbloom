import React, { useState } from "react";

type Cookie = {
  title: string;
  date: string;
};

const CookiJar: React.FC = () => {
  const [cookies, setCookies] = useState<Cookie[]>([
    { title: "Completed a personal project", date: "2025-05-10" },
    { title: "Helped a friend in need", date: "2025-04-28" },
    { title: "Went for a nature walk", date: "2025-04-15" },
    { title: "Stayed calm during a tough day", date: "2025-04-03" },
    { title: "Started journaling daily", date: "2025-03-29" },
  ]);

  const [newCookie, setNewCookie] = useState("");

  const handleAddCookie = () => {
    if (!newCookie.trim()) return;

    const newEntry: Cookie = {
      title: newCookie.trim(),
      date: new Date().toISOString(),
    };

    setCookies([newEntry, ...cookies]);
    setNewCookie("");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 px-4 py-10 sm:px-6 md:px-10 transition text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 dark:from-teal-300 dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
            My Cookie Jar 🍪
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto">
            A cookie jar is your stash of wins, joys, and little victories. When
            you're feeling down, open the jar and remind yourself of how amazing
            you truly are.
          </p>
          <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
            You have {cookies.length} positive memories in your jar 🎉
          </p>
        </div>

        {/* Add Cookie */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={newCookie}
            onChange={(e) => setNewCookie(e.target.value)}
            placeholder="Add a positive memory..."
            className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 "
          />
          <button
            onClick={handleAddCookie}
            className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium shadow-md transition"
          >
            Add
          </button>
        </div>

        {/* Cookie Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mt-6">
          {cookies.map((cookie, index) => (
            <div
              key={index}
              className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all"
            >
              <h2 className="text-base font-semibold text-teal-700 dark:text-teal-300">
                {cookie.title}
              </h2>
              <span className="text-xs text-gray-500 dark:text-gray-500 block mt-2 text-right">
                {new Date(cookie.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiJar;
