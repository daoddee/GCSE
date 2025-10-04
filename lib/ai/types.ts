export type TutorExplainInput = {
questionLatex: string;
studentAnswer?: string;
correctAnswer: string;
level: 'gcse' | 'alevel';
};
export interface TutorProvider {
name: string;
explain(input: TutorExplainInput): Promise<string>;
hint(input: TutorExplainInput): Promise<string>;
}
export type TutorConfig = { provider: 'claude' | 'openai' | 'llama' };
