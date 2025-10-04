create extension if not exists pgcrypto;
stage text check (stage in ('GCSE','AS','A2')) default 'GCSE',
created_at timestamptz default now()
);


create table if not exists public.questions (
id uuid primary key default gen_random_uuid(),
topic_id uuid not null references public.topics(id) on delete cascade,
source text,
question_latex text not null,
answer_options jsonb,
correct_answer text not null,
alt_correct jsonb,
difficulty int check (difficulty between 1 and 5) default 2,
tags text[] default '{}',
created_at timestamptz default now()
);


create table if not exists public.exam_sessions (
id uuid primary key default gen_random_uuid(),
user_id uuid not null references auth.users(id) on delete cascade,
exam_name text,
settings jsonb,
started_at timestamptz default now(),
ends_at timestamptz,
ended_at timestamptz,
score int,
out_of int
);


create table if not exists public.attempts (
id uuid primary key default gen_random_uuid(),
user_id uuid not null references auth.users(id) on delete cascade,
question_id uuid not null references public.questions(id) on delete cascade,
exam_id uuid references public.exam_sessions(id) on delete set null,
given_answer text,
correct boolean,
method jsonb,
time_taken int,
answered_at timestamptz default now()
);


alter table public.profiles enable row level security;
alter table public.attempts enable row level security;
alter table public.exam_sessions enable row level security;


create policy "own profile" on public.profiles for select using (auth.uid() = id);
create policy "update own profile" on public.profiles for update using (auth.uid() = id);
create policy "insert own attempt" on public.attempts for insert with check (auth.uid() = user_id);
create policy "read own attempts" on public.attempts for select using (auth.uid() = user_id);
create policy "own exam sessions" on public.exam_sessions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);


create index if not exists idx_attempts_user on public.attempts(user_id);
create index if not exists idx_questions_topic on public.questions(topic_id);
