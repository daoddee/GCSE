export default function HomePage() {
return (
<main className="space-y-4">
<h2 className="text-xl font-medium">Welcome</h2>
<p>Sign in with Supabase Auth (email magic link) or use the Practice page to try questions.</p>
<a href="/practice" className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white">Start practising</a>
</main>
);
}
