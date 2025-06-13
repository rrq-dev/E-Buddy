// service/mood.js
import axios from "axios";

const API = "http://localhost:1506";

export async function submitMood(mood) {
  const token = localStorage.getItem("token");
  return await axios.post(
    `${API}/moods`,
    { mood },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function getMoods() {
  const token = localStorage.getItem("token");
  return await axios.get(`${API}/moods`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
