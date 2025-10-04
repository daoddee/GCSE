import { NextResponse } from 'next/server';
import { selectNextQuestion } from '@/lib/adaptive/selectNext';
import { cookies } from 'next/headers';


export async function GET(req: Request) {
const { searchParams } = new URL(req.url);
const topicId = searchParams.get('topic') ?? undefined;
const userId = cookies().get('sb-user-id')?.value; // or verify JWT via Supabase helper
if (!userId) return NextResponse.json({ error: 'unauthenticated' }, { status: 401 });
const q = await selectNextQuestion({ userId, topicId });
return NextResponse.json({ question: q });
}
