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
    <div className="space-y-6 px-4 sm:px-6 md:px-8 pb-8">
      {entries.length === 0 ? (
        <p className="text-center text-slate-500 dark:text-slate-400 text-base">
          No journal entries found.
        </p>
      ) : (
        entries.map((entry) => (
          <div
            key={entry.date}
            className="rounded-2xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-5"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400">
                {format(parseISO(entry.date), "EEEE, MMMM do yyyy")}
              </h3>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                {entry.date}
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
              {entry.content.length > 300
                ? entry.content.slice(0, 300) + "..."
                : entry.content}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default JournalListView;
