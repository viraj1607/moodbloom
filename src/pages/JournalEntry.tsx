import { useRef, useState } from "react";

type Emotion = {
  emotion: string;
  intensity: number;
};

type MoodResponse = {
  mood: string;
  sentiment: number;
  emotions: Emotion[];
  insights: string[];
};

function JournalEntry() {
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState<MoodResponse | null>(null);
  const responseRef = useRef<HTMLDivElement | null>(null);

  const staticResponse: MoodResponse = {
    mood: "anxious",
    sentiment: -0.4,
    emotions: [
      { emotion: "anxiety", intensity: 80 },
      { emotion: "stress", intensity: 65 },
      { emotion: "hope", intensity: 30 },
    ],
    insights: [
      "Try writing down what's causing your anxiety to gain clarity.",
      "Take a few minutes for deep breathing or a short walk.",
      "Remember that it's okay to feel overwhelmed sometimes.",
      "Consider setting small, achievable goals for the week.",
    ],
  };

  const handleSave = () => {
    setResponse(staticResponse);
    setTimeout(() => {
      responseRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
            className="px-6 py-2 rounded-xl bg-teal-500 hover:bg-teal-700 text-white font-medium shadow-md transition disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            disabled={!entry}
          >
            {!entry ? "Enter something first" : "Analyze Mood"}
          </button>
        </div>
      </div>

      {response && (
        <div
          ref={responseRef}
          className="max-w-3xl mx-auto mt-10 bg-white/60 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8"
        >
          {/* Mood & Sentiment */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Primary Mood</h2>
            <p className="text-3xl font-semibold capitalize text-slate-800 dark:text-slate-200">
              {response.mood}
            </p>
            <p
              className={`text-sm font-medium px-3 py-1 inline-block rounded-full ${
                response.sentiment > 0.3
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  : response.sentiment < -0.3
                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
              }`}
            >
              Sentiment Score: {response.sentiment.toFixed(2)}
            </p>
          </div>

          {/* Emotions */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-4">Emotional Breakdown</h3>
            <div className="space-y-4">
              {response.emotions.map((e, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1 text-slate-700 dark:text-slate-300">
                    <span className="capitalize">{e.emotion}</span>
                    <span>{e.intensity}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400"
                      style={{ width: `${e.intensity}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Suggestions & Reflections</h3>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 dark:text-slate-200">
              {response.insights.map((tip, index) => (
                <li key={index} className="leading-relaxed">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default JournalEntry;
