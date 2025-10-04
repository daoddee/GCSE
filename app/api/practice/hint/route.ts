import { NextResponse } from 'next/server';
import { getTutor } from '@/lib/ai';


export async function POST(req: Request) {
const body = await req.json();
const { questionLatex } = body;
const tutor = getTutor();
const hint = await tutor.hint({ questionLatex, correctAnswer: '', level: 'gcse' });
return NextResponse.json({ hint });
}
