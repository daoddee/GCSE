export async function isEquivalent(a: string, b: string) {
try {
const res = await fetch(`${process.env.EQUIV_API_URL}/equivalent`, {
method: 'POST',
headers: {
'content-type': 'application/json',
'x-secret': process.env.EQUIV_API_SECRET!,
},
body: JSON.stringify({ a, b }),
cache: 'no-store',
});
if (!res.ok) return false;
const json = await res.json();
return !!json.equivalent;
} catch {
return false;
}
}
