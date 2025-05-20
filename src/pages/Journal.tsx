import { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

export default function JournalPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [view, setView] = useState("calendar");

  const sampleJournals = [
    { date: "2025-05-18", mood: "🙂", preview: "Felt calm and focused..." },
    { date: "2025-05-17", mood: "😟", preview: "Bit overwhelmed today..." },
    { date: "2025-05-16", mood: "😄", preview: "Amazing productive day..." },
  ];

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-teal-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-teal-700 dark:text-teal-300 mb-2">
            My Journal
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Reflect and review your emotional journey day by day.
          </p>
        </div>

        {/* Toggle View */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setView("calendar")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium shadow-md transition ${
              view === "calendar"
                ? "bg-teal-600 text-white"
                : "bg-white dark:bg-gray-800"
            }`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium shadow-md transition ${
              view === "list"
                ? "bg-teal-600 text-white"
                : "bg-white dark:bg-gray-800"
            }`}
          >
            List View
          </button>
        </div>

        {/* Views */}
        {view === "calendar" ? (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl backdrop-blur-md">
            <Calendar
              onChange={(date) => {
                if (date instanceof Date) {
                  setSelectedDate(date);
                  window.location.href = `/journal/${format(date, "yyyy-MM-dd")}`;
                }
              }}
              value={selectedDate}
              tileClassName="!text-sm !font-medium"
              className="!border-none w-full"
            />
          </div>
        ) : (
          <div className="space-y-4">
            {sampleJournals.map((entry) => (
              <Link
                to={`/journal/${entry.date}`}
                key={entry.date}
                className="block bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 hover:ring-2 hover:ring-teal-400 transition-all"
              >
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-lg font-semibold text-teal-700 dark:text-teal-300">
                    {format(new Date(entry.date), "PPP")}
                  </h2>
                  <span className="text-xl">{entry.mood}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {entry.preview}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
