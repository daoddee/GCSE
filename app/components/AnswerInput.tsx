import { useState } from 'react';
export function AnswerInput({ onSubmit }: { onSubmit: (v: string) => void }) {
const [v, setV] = useState('');
return (
<form className="flex gap-2" onSubmit={e => { e.preventDefault(); onSubmit(v); }}>
<input value={v} onChange={e => setV(e.target.value)} placeholder="Type your answer (e.g. x=2,3)"
className="flex-1 border rounded-xl px-3 py-2" />
<button className="px-4 py-2 rounded-xl bg-blue-600 text-white">Check</button>
</form>
);
}
