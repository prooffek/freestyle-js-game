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
    id_question integer,
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

INSERT INTO questions VALUES (1,'Inside which HTML element do we put the JavaScript?','',1);
INSERT INTO answers VALUES (0,'<script>',1,true);
INSERT INTO answers VALUES (1,'<js>',1,false);
INSERT INTO answers VALUES (2,'<scripting>',1,false);
INSERT INTO answers VALUES (3,'<javascript>',1,false);

INSERT INTO questions VALUES (2,'Where is the correct place to insert a JavaScript?','',1);
INSERT INTO answers VALUES (4,' Both the <head> section and the <body> section are correct',2,true);
INSERT INTO answers VALUES (5,' The <body> section',2,false);
INSERT INTO answers VALUES (6,' The <head> section',2,false);
INSERT INTO answers VALUES (7,'Outside of the HTML file',2,false);

INSERT INTO questions VALUES (3,'What is the correct syntax for referring to an external script called "xxx.js"?','',1);
INSERT INTO answers VALUES (8,'<script src="xxx.js">',3,true);
INSERT INTO answers VALUES (9,'<script href="xxx.js">' ,3,false);
INSERT INTO answers VALUES (10, '<script href="xxx.js">',3,false);
INSERT INTO answers VALUES (11,'Any of the given syntax is good',3,false);