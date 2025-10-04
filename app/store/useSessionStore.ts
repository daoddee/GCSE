'use client';
import { create } from 'zustand';


type State = {
examId?: string;
startedAt?: number;
duration?: number;
};


type Actions = {
start: (examId: string, duration: number) => void;
end: () => void;
};


export const useSessionStore = create<State & Actions>((set) => ({
start: (examId, duration) => set({ examId, startedAt: Date.now(), duration }),
end: () => set({ examId: undefined, startedAt: undefined, duration: undefined }),
}));
