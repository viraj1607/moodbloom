import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

type JournalEntry = {
  date: string;
  content: string;
};

const JournalListView = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    const storedEntries: JournalEntry[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("journal-")) {
        const date = key.replace("journal-", "");
        const content = localStorage.getItem(key);
        if (content) {
          storedEntries.push({ date, content });
        }
      }
    }

    const sorted = storedEntries.sort((a, b) => b.date.localeCompare(a.date));
    setEntries(sorted);
  }, []);

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

        {entries.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400 text-base">
            No journal entries found.
          </p>
        ) : (
          <div className="space-y-6">
            {entries.map((entry) => (
              <div
                key={entry.date}
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
