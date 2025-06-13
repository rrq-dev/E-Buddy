export default function MoodTimeline({ moods }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Mood Timeline</h3>
      <ul className="space-y-2">
        {moods.map((entry, i) => (
          <li key={i} className="p-2 border rounded-md shadow-sm">
            <strong>{entry.mood}</strong> –{" "}
            {new Date(entry.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
