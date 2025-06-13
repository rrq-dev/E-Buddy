"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

// Komponen custom
import WebcamCard from "@/components/WebcamCard";
import MoodStats from "@/components/MoodStats";
import MoodTimeline from "@/components/MoodTimeline";
import MoodChart from "@/components/MoodChart";

// Service
import MoodService from "@/service/mood";

// UI dari Shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  const router = useRouter();
  const [moods, setMoods] = useState([]);
  const [lastMood, setLastMood] = useState("");
  const webcamRef = useRef(null);

  // Ambil data mood saat komponen pertama kali mount
  useEffect(() => {
    (async () => {
      try {
        const res = await MoodService.getMoods();
        setMoods(res.data);
        if (res.data.length > 0) {
          setLastMood(res.data[0].mood);
        }
      } catch (error) {
        console.error("Gagal ambil data mood:", error);
        router.push("/auth/login"); // redirect ke login kalau gagal
      }
    })();
  }, [router]);

  // Submit mood manual
  const handleSubmit = async (moodText) => {
    try {
      await MoodService.submitMood(moodText);
      const res = await MoodService.getMoods();
      setMoods(res.data);
      setLastMood(moodText);
    } catch (error) {
      console.error("Gagal submit mood:", error);
    }
  };

  // Simulasi deteksi dari webcam
  const handleDetect = async () => {
    const img = webcamRef.current?.getScreenshot();
    if (!img) {
      alert("Webcam belum aktif atau tidak bisa menangkap gambar.");
      return;
    }
    alert("Simulasi detect mood: 😁");
    handleSubmit("DetectedMood");
  };

  return (
    <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Bagian Kiri: Webcam & Timeline */}
      <section className="lg:col-span-2 space-y-6">
        <WebcamCard webcamRef={webcamRef} onDetect={handleDetect} />
        <Card>
          <CardContent>
            <MoodTimeline moods={moods} />
          </CardContent>
        </Card>
      </section>

      {/* Bagian Kanan: Stats, Chart, Logout */}
      <section className="space-y-6">
        <MoodStats total={moods.length} lastMood={lastMood} />
        <MoodChart moods={moods} />
        <Button
          variant="destructive"
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/auth/login");
          }}
        >
          Logout
        </Button>
      </section>
    </main>
  );
}
