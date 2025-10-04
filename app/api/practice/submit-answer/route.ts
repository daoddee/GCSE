import { NextResponse } from 'next/server';
import { isEquivalent } from '@/lib/grading/equivalence';
import { getTutor } from '@/lib/ai';
import { createClient } from '@supabase/supabase-js';


export async function POST(req: Request) {
const body = await req.json();
const { questionId, answer, timeTaken } = body;
const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
const { data: q } = await supa.from('questions').select('*').eq('id', questionId).single();
const correct = await isEquivalent(answer, q.correct_answer).catch(() => false) ||
(q.alt_correct?.includes?.(answer));
// save attempt (server should set user_id from verified JWT)
// ... insert into attempts ...
const tutor = getTutor();
const explanation = await tutor.explain({ questionLatex: q.question_latex, studentAnswer: answer, correctAnswer: q.correct_answer, level: 'gcse' });
return NextResponse.json({ correct, explanation, correctAnswer: q.correct_answer });
}
