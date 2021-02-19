-- Pytanie 1

INSERT INTO answers (id, answer, id_question, correct)
VALUES (0, '< script >', 0, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (1, '< js >', 0, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (2, '< scripting >', 0, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (3, '< javascript >', 0, false);

-- Pytanie 2

INSERT INTO answers (id, answer, id_question, correct)
VALUES (4, 'Zarówno w <body> jak i <head>', 1, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (5, 'W <body>', 1, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (6, 'W <head>', 1, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (7, 'JavaScriptu nigdy nie umieszcza się wewnątrz pliku HTML', 1, false);

-- Pytanie 3

INSERT INTO answers (id, answer, id_question, correct)
VALUES (8, '< script src="xxx.js">', 2, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (9, '< script href="xxx.js">', 2, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (10, '< script href="xxx.js">', 2, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (11, 'Wszystkie odpowiedzi są poprawne', 2, false);

-- Pytanie 4

INSERT INTO answers (id, answer, id_question, correct)
VALUES (12, 'Document Object Model', 3, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (13, 'Document Orientation Model', 3, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (14, 'Definitive Object Model', 3, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (15, 'Domain Object Model', 3, false);

-- Pytanie 5

INSERT INTO answers (id, answer, id_question, correct)
VALUES (16, 'oba warunki będą prawdziwe', 4, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (17, 'jeden z warunków będzie prawdziwy', 4, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (18, 'tylko pierwszy warunek będzie prawdziwy', 4, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (19, 'oba warunki będą fałszywe', 4, false);

-- Pytanie 6

INSERT INTO answers (id, answer, id_question, correct)
VALUES (20, 'for (i=0; i <= 5; i++)', 5, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (21, 'for (i= 0 to 5)', 5, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (22, 'for (i <=5; i++)', 5, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (23, 'for (i = 0; i <=5)', 5, false);

-- Pytanie 7

INSERT INTO answers (id, answer, id_question, correct)
VALUES (24, 'Pozwala dodawać EventListener na elemencie-rodzicu, zamiast dodawać na każdym przycisku/linku z osobna', 6, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (25, 'żadne, powstały tylko po to by irytować…', 6, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (26, 'Powoduje że struktura DOM jest bardziej czytelna', 6, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (27, 'ładnie wygląda, tak… "bobelkowo"', 6, false);

-- Pytanie 8

INSERT INTO answers (id, answer, id_question, correct)
VALUES (28, '.getElementByTagName aktualizuje się automatycznie podczas manipulowaniem pliku HTML', 7, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (29, '.querySelectorAll aktualizuje się automatycznie podczas manipulowaniem pliku HTML', 7, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (30, 'nie ma między nimi różnicy', 7, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (31, '.querySelectorAll powstało wcześniej i jest spóźnizną wcześniejszych wersji JS', 7, false);

-- Pytanie 9

INSERT INTO answers (id, answer, id_question, correct)
VALUES (32, 'alert("Hello World");', 8, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (33, 'msgBox("Hello World");', 8, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (34, 'msg("Hello World");', 8, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (35, 'alertBox("Hello World");', 8, false);

-- Pytanie 10

INSERT INTO answers (id, answer, id_question, correct)
VALUES (36, '1', 9, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (37, '"1"', 9, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (38, 'program zgłosi błąd', 9, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (39, '"5-4"', 9, false);

-- Pytanie 11

INSERT INTO answers (id, answer, id_question, correct)
VALUES (40, 'Math.round(7.25)', 10, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (41, 'rnd(7.25)', 10, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (42, 'round(7.25)', 10, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (43, 'Math.rnd(7.25)', 10, false);

-- Pytanie 12

INSERT INTO answers (id, answer, id_question, correct)
VALUES (44, 'Math.max(x,y)', 11, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (45, 'max(x,y)', 11, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (46, 'Math.ceil(x,y)', 11, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (47, 'top(x,y)', 11, false);

-- Pytanie 13

INSERT INTO answers (id, answer, id_question, correct)
VALUES (48, '"95"', 12, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (49, '"7245"', 12, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (50, '14', 12, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (51, 'false', 12, false);

-- Pytanie 14

INSERT INTO answers (id, answer, id_question, correct)
VALUES (52, '""', 13, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (53, '[]', 13, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (54, '- Infinity', 13, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (55, 'true', 13, false);

-- Pytanie 15

INSERT INTO answers (id, answer, id_question, correct)
VALUES (56, 'false', 14, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (57, 'true', 14, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (58, 'null', 14, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (59, 'program zgłosi błąd', 14, false);

-- Pytanie 16

INSERT INTO answers (id, answer, id_question, correct)
VALUES (60, '"banana"', 15, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (61, '"baaa"', 15, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (62, 'syntax error', 15, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (63, 'NaN', 15, false);

-- Pytanie 17

INSERT INTO answers (id, answer, id_question, correct)
VALUES (64, '"number"', 16, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (65, 'error', 16, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (66, 'undefined', 16, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (67, 'null', 16, false);

-- Pytanie 18

INSERT INTO answers (id, answer, id_question, correct)
VALUES (68, '1', 17, true);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (69, '"2-true"', 17, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (70, 'syntaxError', 17, false);

INSERT INTO answers (id, answer, id_question, correct)
VALUES (71, '2', 17, false);