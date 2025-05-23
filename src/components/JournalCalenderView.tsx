import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

type DatePhotoMap = Record<string, string>; // date string (yyyy-MM-dd) -> base64 photo

const JournalCalenderView = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [datePhotos, setDatePhotos] = useState<DatePhotoMap>({});

  // Load photos from localStorage
  useEffect(() => {
    const photos: DatePhotoMap = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("photo-")) {
        const dateKey = key.replace("photo-", "");
        const photoBase64 = localStorage.getItem(key);
        if (photoBase64) photos[dateKey] = photoBase64;
      }
    }
    setDatePhotos(photos);
  }, []);

  // Custom tile content to show background image + overlay + date number
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== "month") return null;

    const dateKey = format(date, "yyyy-MM-dd");
    const photo = datePhotos[dateKey];

    if (!photo) return null;

    return (
      <>
        <div
          className="photo-bg"
          style={{ backgroundImage: `url(${photo})` }}
          aria-hidden="true"
        />
        <span className="date-number">{date.getDate()}</span>
      </>
    );
  };

  // Also update tileClassName to remove relative and rounded (handled in CSS)
  const tileClassName = () => "";

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
            tileContent={tileContent}
            tileClassName={tileClassName}
            className="text-gray-800 dark:text-white"
          />
        </div>

        {/* Add Journal Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {format(selectedDate || new Date(), "EEEE, MMMM d, yyyy")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Ready to express how you're feeling today?
            </p>
            <textarea
              rows={5}
              className="w-full p-3 rounded-xl bg-white/50 dark:bg-gray-800/40 border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 resize-none text-sm"
              placeholder="Write about your day..."
            />
          </div>

          <button className="mt-4 ml-auto bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2 rounded-full transition shadow-md">
            Add Journal
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalCalenderView;
