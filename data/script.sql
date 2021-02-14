DROP TABLE IF EXISTS public.questions;
create table questions
(
    id       serial not null
        constraint questions_pk
            primary key,
    question text,
    image    text,
    level    integer
);

alter table questions
    owner to postgres;

DROP TABLE IF EXISTS public.answers;
create table answers
(
    id          serial not null
        constraint answers_pk
            primary key,
    answer      text,
    id_question text,
    correct     boolean
);

alter table answers
    owner to postgres;

DROP TABLE IF EXISTS public.ranking;
create table ranking
(
    id     integer not null
        constraint ranking_pk
            primary key,
    name   text,
    points integer
);

alter table ranking
    owner to postgres;

INSERT INTO questions VALUES (0,'Inside which HTML element do we put the JavaScript?','',1);
INSERT INTO answers VALUES (0,'<javascript>',1,false);
INSERT INTO answers VALUES (1,'<js>',1,false);
INSERT INTO answers VALUES (2,'<scripting>',1,false);
INSERT INTO answers VALUES (3,'<script>',1,true);