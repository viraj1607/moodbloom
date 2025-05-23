import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { JournalEntry } from "../pages/Journal";

type JournalProps = {
  journals: JournalEntry[];
};

const JournalListView = ({ journals }: JournalProps) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState<string>("");
  const [newDate, setNewDate] = useState<string>(new Date().toISOString().slice(0, 10)); // YYYY-MM-DD

  useEffect(() => {
    setEntries(journals);
  }, [journals]);

  const handleAddEntry = () => {
    if (!newEntry.trim()) return;

    const entry: JournalEntry = {
      date: newDate,
      content: newEntry.trim(),
    };

    setEntries((prev) => [entry, ...prev]);
    setNewEntry("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition px-4 sm:px-6 md:px-10 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-teal-700 dark:text-teal-300 mb-2">
            Past Journal Entries
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            A reflection of your recent thoughts and emotions.
          </p>
        </div>

        {/* New Journal Entry Form */}
        <div className="mb-10 p-6 bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-0">
              Select Date:
            </label>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="p-2 rounded-md border border-white/30 dark:border-white/10 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100"
            />
          </div>
          <button
            onClick={handleAddEntry}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2 rounded-full transition shadow-md"
          >
            Add Journal Entry
          </button>
        </div>

        {/* Journal List */}
        {entries.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400 text-base">
            No journal entries found.
          </p>
        ) : (
          <div className="space-y-6">
            {entries.map((entry) => (
              <div
                key={`${entry.date}-${entry.content.slice(0, 10)}`}
                className="rounded-3xl p-6 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-teal-700 dark:text-teal-300">
                    {format(parseISO(entry.date), "EEEE, MMMM do yyyy")}
                  </h3>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {entry.date}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
                  {entry.content.length > 400
                    ? entry.content.slice(0, 400) + "..."
                    : entry.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalListView;
