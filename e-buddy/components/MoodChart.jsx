import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MoodChart({ moods }) {
  const data = moods.map((entry, i) => ({
    name: `Mood ${i + 1}`,
    mood: entry.mood.length,
  }));

  return (
    <Card>
      <CardContent className="space-y-2">
        <h2 className="text-lg font-semibold">Mood Chart</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
