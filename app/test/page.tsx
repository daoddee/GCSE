'use client';
import { useSessionStore } from '@/store/useSessionStore';
import Timer from '@/components/Timer';


export default function TestHome() {
const { examId, start, end } = useSessionStore();
return (
<div className="space-y-4">
<h1 className="text-3xl font-semibold">Timed Mock</h1>
{!examId ? (
<button className="px-4 py-2 rounded-xl bg-blue-600 text-white" onClick={() => start('local', 20*60)}>
Start 20‑minute mock
</button>
) : (
<div className="space-y-2">
<Timer seconds={20*60} onEnd={end} />
<p>Mock running… (wire to /api/test/session)</p>
</div>
)}
</div>
);
}
