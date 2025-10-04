import { createClient } from '@supabase/supabase-js';
import { targetDifficulty } from './mastery';


export async function selectNextQuestion({ userId, topicId }: { userId: string; topicId?: string; }) {
// 1) compute simple mastery from last 30 attempts in topic
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
const base = supabase.from('attempts').select('correct, questions(difficulty, id, topic_id)').limit(30).order('answered_at', { ascending: false }).
eq('user_id', userId);
const { data } = topicId ? await base.eq('questions.topic_id', topicId) : await base;
const p = (data?.filter(a => a.correct).length ?? 0) / Math.max(1, data?.length ?? 1);
const d = targetDifficulty(p);


// 2) pick unseen or least-recent question near difficulty d
let q = await supabase
.from('questions')
.select('id, question_latex, correct_answer, answer_options, difficulty, topic_id')
.gte('difficulty', Math.max(1, d - 1))
.lte('difficulty', Math.min(5, d + 1))
.limit(1)
.order('created_at', { ascending: false });
return q.data?.[0];
}
