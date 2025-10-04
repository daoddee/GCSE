import Link from 'next/link';
import ProgressChart from '@/components/ProgressChart';


export default async function PracticePage() {
// load topics + mastery server-side
const rows = [ { topic: 'Quadratics', mastery: 0.42 } ];
return (
<div className="max-w-3xl mx-auto p-6 space-y-6">
<h1 className="text-3xl font-semibold">Practice</h1>
<ProgressChart rows={rows} />
<div className="grid sm:grid-cols-2 gap-3">
<Link href="/practice/next" className="rounded-2xl p-4 bg-blue-600 text-white">Recommended</Link>
<Link href="/practice/topic/00000000-0000-0000-0000-000000000001" className="rounded-2xl p-4 border">Quadratics</Link>
</div>
</div>
);
}
