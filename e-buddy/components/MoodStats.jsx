import { Card, CardContent } from "@/components/ui/card";

export default function MoodStats({ total, lastMood }) {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-lg font-bold">Statistik Mood</h2>
        <p>
          Total Entry: <strong>{total}</strong>
        </p>
        <p>
          Last Mood: <strong>{lastMood}</strong>
        </p>
      </CardContent>
    </Card>
  );
}
