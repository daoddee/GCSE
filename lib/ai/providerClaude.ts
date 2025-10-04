import Anthropic from '@anthropic-ai/sdk';
import type { TutorProvider, TutorExplainInput } from './types';


const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });


const explainMsg = (i: TutorExplainInput) => ({
role: 'user' as const,
content: `You are a patient ${i.level.toUpperCase()} maths tutor. Use UK exam-board methods, LaTeX for maths, and end with a boxed answer.


Question: ${i.questionLatex}
Student answer: ${i.studentAnswer ?? '(none)'}
Correct answer (for reference): ${i.correctAnswer}`,
});


export const ClaudeProvider: TutorProvider = {
name: 'claude',
async explain(i) {
const resp = await client.messages.create({
model: 'claude-3-5-sonnet-20241022',
max_tokens: 600,
messages: [explainMsg(i)],
});
return resp.content.map((c: any) => ('text' in c ? c.text : '')).join('
');
},
async hint(i) {
const resp = await client.messages.create({
model: 'claude-3-5-haiku-20241022',
max_tokens: 200,
messages: [{ role: 'user', content: `Give ONE helpful hint for: ${i.questionLatex}` }],
});
return resp.content.map((c: any) => ('text' in c ? c.text : '')).join('
');
},
};
