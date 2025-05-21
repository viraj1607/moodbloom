import React, { useState } from "react";

function JournalEntry() {
  const [entry, setEntry] = useState("");

  const handleSave = () => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    localStorage.setItem(`journal-${today}`, entry);
    alert("Journal entry saved!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 dark:from-[#0f172a] dark:to-[#1e293b] px-4 py-10 sm:px-6 md:px-10 transition-colors">
      <div className="max-w-3xl mx-auto bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-xl rounded-3xl p-6 sm:p-10 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 dark:from-teal-300 dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
          Write Today’s Journal
        </h1>

        <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
          Let your thoughts flow. MoodBloom will understand how you feel.
        </p>

        <textarea
          rows={10}
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="How was your day? What did you feel? Write freely..."
          className="w-full resize-none rounded-2xl p-5 bg-white/60 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />

        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-xl bg-teal-500 hover:bg-teal-700 text-white font-medium shadow-md transition"
          >
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
}

export default JournalEntry;
