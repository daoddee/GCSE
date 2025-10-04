import QuestionCard from '@/components/QuestionCard';
import { AnswerInput } from '@/components/AnswerInput';


export default function QuestionPage({ params }: { params: { qid: string } }) {
const qid = params.qid;
async function submit(data: FormData) {}
return (
<div className="space-y-4">
<QuestionCard latex={"x^2 - 5x + 6 = 0"} />
<AnswerInput onSubmit={(v) => console.log('submit', qid, v)} />
</div>
);
}
