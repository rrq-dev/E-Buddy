"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/*******  0f12d5aa-1fce-4960-8241-7dd91887a759  *******/ export default function UserDashboard() {
  return (
    <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardContent className="p-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Submit Mood</h2>
          <p className="text-gray-500 text-sm mb-4 text-center">
            Curhat harianmu di sini
          </p>
          <Button asChild>
            <Link href="/submit-mood">Mulai</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Mood Analytics</h2>
          <p className="text-gray-500 text-sm mb-4 text-center">
            Lihat statistik mood kamu
          </p>
          <Button asChild>
            <Link href="/analytics">Lihat</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Mood History</h2>
          <p className="text-gray-500 text-sm mb-4 text-center">
            Riwayat curhat kamu
          </p>
          <Button asChild>
            <Link href="/history">Cek</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
