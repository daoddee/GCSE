export type Mastery = { p: number; n: number };
export function updateMastery(m: Mastery, correct: boolean): Mastery {
const k = 0.12;
const delta = correct ? (1 - m.p) * k : -m.p * k;
return { p: Math.min(1, Math.max(0, m.p + delta)), n: m.n + 1 };
}
export function targetDifficulty(p: number) {
if (p < 0.2) return 1; if (p < 0.4) return 2; if (p < 0.6) return 3; if (p < 0.8) return 4; return 5;
}
