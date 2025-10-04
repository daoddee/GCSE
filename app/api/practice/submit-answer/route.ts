import { NextResponse } from 'next/server';
import { isEquivalent } from '@/lib/grading/equivalence';
import { getTutor } from '@/lib/ai';
import { createClient } from '@supabase/supabase-js';


export async function POST(req: Request) {
const body = await req.json();
const { questionId, answer } = body as { questionId: string; answer: string };


const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
const { data: q } = await supa.from('questions').select('*').eq('id', questionId).single();
if (!q) return NextResponse.json({ error: 'Question not found' }, { status: 404 });


const correct = (await isEquivalent(answer, q.correct_answer)) || (Array.isArray(q.alt_correct) && q.alt_correct.includes(answer));


// TODO: insert attempt with verified user id; MVP skips auth wiring
const tutor = getTutor();
const explanation = await tutor.explain({ questionLatex: q.question_latex, studentAnswer: answer, correctAnswer: q.correct_answer, level: 'gcse' });


return NextResponse.json({ correct, explanation, correctAnswer: q.correct_answer });
}
