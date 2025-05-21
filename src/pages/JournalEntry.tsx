import React, { useRef, useState } from "react";
import geminiAI from "../services/GeminiAPI";

type response = {
  mood_summary: string;
  tips: string[];
};

function JournalEntry() {
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState<response | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const responseRef = useRef<HTMLDivElement | null>(null);

  const handleSave = async () => {
    setLoading(true);
    const prompt = `
        You are a compassionate and insightful mental wellness assistant. A user has written a personal journal entry. Your job is to analyze the emotional tone of the entry and return two things:

        1. A brief summary of the user's **overall mood** in a warm and non-judgmental tone.
        2. Personalized, empathetic **3 tips or suggestions** to help the user improve their mental well-being, based on what they shared.

        Always speak as if you are talking to a friend — gently supportive and understanding.

        Here is the journal entry:

        ${entry}

        Respond in this JSON format:
        {
        "mood_summary": "Short paragraph summarizing the mood",
        "tips": [
            "Tip 1...",
            "Tip 2...",
            "Tip 3..."
        ]
        }

    `;
    try {
      const GeminiRes: string | undefined = await geminiAI(prompt);
      if (!GeminiRes) {
        console.error("GeminiAI returned undefined");
        return;
      }
      const cleanJSON: string = GeminiRes.replace(/```json|```/g, "").trim();
      const parsedJSON: response = JSON.parse(cleanJSON);
      setResponse(parsedJSON);
      setTimeout(() => {
        responseRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      setLoading(false);
    } catch (err: any) {
      console.error(err);
    }
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
            className="px-6 py-2 rounded-xl bg-teal-500 hover:bg-teal-700 text-white font-medium shadow-md transition
             disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
            disabled={!entry}
          >
            {!entry
              ? "Enter something first"
              : loading
              ? "Generating..."
              : "Save Entry"}
          </button>
        </div>
      </div>
      {response && (
        <div
          ref={responseRef}
          className="mt-8 bg-white/60 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl p-6 space-y-4 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
            Mood Analysis
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            {response.mood_summary}
          </p>

          <h3 className="text-lg font-medium text-cyan-600 dark:text-cyan-400">
            Tips for You
          </h3>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            {response.tips.map((tip, index) => (
              <li className="my-4" key={index}>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default JournalEntry;
