import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import JournalCalenderView from "../components/JournalCalenderView";
import JournalListView from "../components/JournalListView";

export type JournalEntry = {
  date: string;
  content: string;
};


export default function JournalPage() {
  const [view, setView] = useState("calendar");

  const sampleJournals:JournalEntry[] = [
    { date: "2025-05-18", content: "Felt calm and focused..." },
    { date: "2025-05-17", content: "Bit overwhelmed today..." },
    { date: "2025-05-16", content: "Amazing productive day..." },
  ];

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-teal-50 to-blue-100 dark:from-[#0f172a] dark:to-[#1e293b] transition text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 dark:from-teal-300 dark:via-cyan-300 dark:to-blue-300">
            My Journal
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
            Reflect and review your emotional journey, day by day.
          </p>
        </div>

        {/* Toggle View */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setView("calendar")}
            className={`px-5 py-2 rounded-full text-sm font-medium shadow-md backdrop-blur-md transition ${
              view === "calendar"
                ? "bg-teal-500 text-white"
                : "bg-white/40 dark:bg-white/10 text-gray-700 dark:text-gray-300"
            }`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-5 py-2 rounded-full text-sm font-medium shadow-md backdrop-blur-md transition ${
              view === "list"
                ? "bg-teal-500 text-white"
                : "bg-white/40 dark:bg-white/10 text-gray-700 dark:text-gray-300"
            }`}
          >
            List View
          </button>
        </div>

        {/* Content */}
        {view === "calendar" ? (
          <div className="bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-xl backdrop-blur-md">
           <JournalCalenderView/>
          </div>
        ) : (
          <div className="space-y-4">
            {/* {sampleJournals.map((entry) => ( */}
              <Link
                to={`/journal/${1}`}
                className="block bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-5 shadow-lg backdrop-blur-md transition-all"
              >
                <JournalListView journals={sampleJournals}/>
              </Link>
            {/* ))} */}
          </div>
        )}
      </div>
    </div>
  );
}
