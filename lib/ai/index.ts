import { ClaudeProvider } from './providerClaude';
import type { TutorProvider } from './types';


export function getTutor(): TutorProvider {
const name = (process.env.TUTOR_PROVIDER ?? 'claude') as 'claude';
switch (name) {
case 'claude':
default:
return ClaudeProvider;
}
}
