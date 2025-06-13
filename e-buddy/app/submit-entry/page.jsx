"use client";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SubmitMood() {
  const [mood, setMood] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:8080/moods",
        { mood },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Mood submitted!");
    } catch (err) {
      alert("Submit gagal 😢");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-4">
      <Input
        placeholder="Your Mood Today?"
        onChange={(e) => setMood(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
