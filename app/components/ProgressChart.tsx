import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
export default function ProgressChart({ rows }: { rows: { topic: string; mastery: number; }[] }) {
return (
<div className="h-80">
<ResponsiveContainer width="100%" height="100%">
<RadarChart data={rows}>
<PolarGrid />
<PolarAngleAxis dataKey="topic" />
<PolarRadiusAxis angle={30} domain={[0, 1]} />
<Tooltip />
<Radar dataKey="mastery" stroke="#2563eb" fill="#60a5fa" fillOpacity={0.4} />
</RadarChart>
</ResponsiveContainer>
</div>
);
}
