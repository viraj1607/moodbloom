import {useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const JournalCalenderView = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    console.log(new Date());
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/journal/${Date.now()}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-emerald-600 dark:text-emerald-400">
        Journal Calendar
      </h2>

      <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl shadow-xl rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start justify-between">
        {/* Calendar Section */}
        <div className="w-full md:w-1/2">
          <Calendar
            onChange={(date) => setSelectedDate(date as Date)}
            value={selectedDate}
            className="text-gray-800 dark:text-white"
          />
        </div>

        {/* Add Journal Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {format(selectedDate, "EEEE, MMMM d, yyyy")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Ready to express how you're feeling today?
            </p>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 ml-auto bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2 rounded-full transition shadow-md"
          >
            Add Journal
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalCalenderView;
