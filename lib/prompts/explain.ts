export const explainPrompt = ({ level }: { level: 'gcse'|'alevel' }) => `You are a ${level.toUpperCase()} maths tutor. Use LaTeX, UK exam-board methods, and finish with a boxed final answer.`;
