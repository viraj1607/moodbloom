import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

type DatePhotoMap = Record<string, string>; // date string (yyyy-MM-dd) -> base64 photo

const JournalPhotoCalendar = () => {
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

  // Handle photo upload
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (!reader.result) return;
      const base64 = reader.result.toString();
      const dateKey = format(selectedDate, "yyyy-MM-dd");
      localStorage.setItem(`photo-${dateKey}`, base64);
      setDatePhotos((prev) => ({ ...prev, [dateKey]: base64 }));
      alert("Photo saved for " + dateKey);
    };
    reader.readAsDataURL(file);
  };

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
        Journal Photo Calendar
      </h2>

      <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl shadow-xl rounded-2xl p-6">
        <Calendar
          onChange={(date) => setSelectedDate(date as Date)}
          value={selectedDate}
          tileContent={tileContent}
          tileClassName={tileClassName}
          className="text-gray-800 dark:text-white"
        />

        <div className="mt-6 text-center">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Upload photo for {format(selectedDate, "MMMM do, yyyy")}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mx-auto block text-sm text-gray-600 dark:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default JournalPhotoCalendar;
