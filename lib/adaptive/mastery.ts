export type Mastery = { p: number; n: number; }; // p: proficiency 0..1, n: count
export function updateMastery(m: Mastery, correct: boolean) {
const k = 0.12; // learning rate
const delta = correct ? (1 - m.p) * k : -m.p * k;
return { p: Math.min(1, Math.max(0, m.p + delta)), n: m.n + 1 };
}


// difficulty buckets 1..5 target probability ~0.6
export function targetDifficulty(p: number) {
if (p < 0.2) return 1;
if (p < 0.4) return 2;
if (p < 0.6) return 3;
if (p < 0.8) return 4;
return 5;
}
