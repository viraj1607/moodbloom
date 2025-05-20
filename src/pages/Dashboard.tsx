import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";

const notesData = [
  { name: "Mon", notes: 5 },
  { name: "Tue", notes: 8 },
  { name: "Wed", notes: 4 },
  { name: "Thu", notes: 10 },
  { name: "Fri", notes: 3 },
  { name: "Sat", notes: 7 },
  { name: "Sun", notes: 6 },
];

const tagsData = [
  { name: "Tech", count: 12 },
  { name: "Wellness", count: 9 },
  { name: "Study", count: 7 },
  { name: "Work", count: 5 },
  { name: "Life", count: 3 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen w-full pt-20 px-4 md:px-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <span className="text-gray-500 dark:text-gray-400">Weekly Overview 🚀</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-1">Total Notes</h2>
          <p className="text-4xl font-bold text-indigo-600 dark:text-yellow-400">68</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-1">Tags Used</h2>
          <p className="text-4xl font-bold text-indigo-600 dark:text-yellow-400">24</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-1">Active Days</h2>
          <p className="text-4xl font-bold text-indigo-600 dark:text-yellow-400">6/7</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Notes Created (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={notesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="notes" stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Top Tags Used</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tagsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
