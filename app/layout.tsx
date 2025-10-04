import './globals.css';
import type { ReactNode } from 'react';


export const metadata = { title: 'Adaptive Maths Tutor', description: 'GCSE & A‑Level practice' };


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-zinc-50 text-zinc-900">
<div className="max-w-4xl mx-auto p-6">
<header className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold">🎓 Adaptive Maths Tutor</h1>
<nav className="text-sm space-x-4">
<a href="/practice" className="underline">Practice</a>
<a href="/test" className="underline">Mock</a>
<a href="/review" className="underline">Review</a>
</nav>
</header>
{children}
</div>
</body>
</html>
);
}
