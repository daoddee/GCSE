import { NextResponse } from 'next/server';
import { selectNextQuestion } from '@/lib/adaptive/selectNext';


export async function GET(req: Request) {
const { searchParams } = new URL(req.url);
const topicId = searchParams.get('topic') ?? undefined;
// In production, derive user from Supabase JWT; for MVP, mock id:
const userId = '00000000-0000-0000-0000-000000000001';
const q = await selectNextQuestion({ userId, topicId });
return NextResponse.json({ question: q });
}
