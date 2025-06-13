"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MoodHistory() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:8080/moods", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMoods(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMoods();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Mood History</h1>
      <ul className="space-y-2">
        {moods.map((mood, i) => (
          <li key={i} className="border p-2 rounded-md shadow-sm">
            {mood.mood}
          </li>
        ))}
      </ul>
    </div>
  );
}
