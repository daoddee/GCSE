insert into public.topics (id, name, stage) values
('00000000-0000-0000-0000-000000000001','Quadratic Equations','GCSE')
on conflict do nothing;


insert into public.questions (topic_id, source, question_latex, correct_answer, alt_correct, difficulty, tags)
values
('00000000-0000-0000-0000-000000000001', 'synthetic',
'Solve\;x^2-5x+6=0', 'x=2,3', '["x=3,2","x=2
3"]', 1, '{factorising,roots}'),
('00000000-0000-0000-0000-000000000001', 'synthetic',
'Find\;the\;discriminant\;of\;x^2+4x+5', 'Δ=-4', '["-4","b^2-4ac=-4"]', 1, '{discriminant}'),
('00000000-0000-0000-0000-000000000001', 'synthetic',
'Axis\;of\;symmetry\;of\;y=x^2-6x+1', 'x=3', '[]', 1, '{graphs,axis_of_symmetry}');
