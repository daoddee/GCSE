'use client';
import { useEffect, useState } from 'react';
export default function Timer({ seconds, onEnd }: { seconds: number; onEnd: () => void }) {
const [t, setT] = useState(seconds);
useEffect(() => {
const id = setInterval(() => setT((s) => (s <= 1 ? (clearInterval(id), onEnd(), 0) : s - 1) as any), 1000);
return () => clearInterval(id);
}, [onEnd]);
const m = Math.floor(t / 60), s = (t % 60).toString().padStart(2, '0');
return <div className="font-mono text-xl">⏱ {m}:{s}</div>;
}
