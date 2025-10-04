'use client';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';


export default function QuestionCard({ latex }: { latex: string }) {
return (
<div className="rounded-2xl p-6 shadow-sm bg-white dark:bg-zinc-900">
<TeX math={latex} block />
</div>
);
}
