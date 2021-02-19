from flask import Flask, request, render_template, redirect, url_for
import data_manager, random, copy, json
NUMBER_OF_QUESTIONS = 3
LIST_OF_KEYS = ["good_answer", "false_answer1", "false_answer2", "false_answer3"]
LEVELS = [1, 2, 3]

app = Flask(__name__)

if __name__ == "__main__":
    app.run()

lvl1 = [{"question_content": "pytanie 1",
         "correct_answer": "odp 1",
         "false_answer1": "false odp 1",
         "false_answer2": "false odp 2",
         "false_answer3": "false odp 3"},

        {"question_content": "pytanie 2",
         "correct_answer": "odp 1",
         "false_answer1": "false odp 1",
         "false_answer2": "false odp 2",
         "false_answer3": "false odp 3"},

        {"question_content": "pytanie 3",
         "correct_answer": "odp 1",
         "false_answer1": "false odp 1",
         "false_answer2": "false odp 2",
         "false_answer3": "false odp 3"}
        ]

# lvl1 = [{pytani1}, {pytanie2}, {pytanie3}]


@app.route('/')
def index():
    lvl1, lvl2, lvl3 = [create_list(num) for num in LEVELS] # [{pytanie, dobra odpowiedź, zła odpowiedź1, zła odpowiedź2, zła odpowiedź3},{}....]
    random.shuffle(lvl1), random.shuffle(lvl2), random.shuffle(lvl3)
    ranking = create_ranking()
    return render_template("index.html", questions_lvl1=lvl1, questions_lvl2=lvl2, questions_lvl3=lvl3,
                           random_keys_list=randomise_keys(lvl1),ranking_list=ranking )


def create_list(lvlNum):
    questions = data_manager.get_questions(lvlNum)
    questions_num = len(questions)
    all_data = []
    single_qa = {}
    # for i in range(0, NUMBER_OF_QUESTIONS):
    for i in range(0, questions_num):
        question_id = questions[i]["id"]
        single_qa["content"] = questions[i]["question"]
        answer = data_manager.get_answers_to_question(question_id + 1)
        single_qa["good_answer"] = answer[0]["answer"]
        single_qa["false_answer1"] = answer[1]["answer"]
        single_qa["false_answer2"] = answer[2]["answer"]
        single_qa["false_answer3"] = answer[3]["answer"]
        single_qa_copy = single_qa.copy()
        all_data.append(single_qa_copy)
    return all_data


def randomise_keys(list_of_question_dicts):
    randomised_keys_for_all_questions = []
    for num in range(len(list_of_question_dicts)):
        random.shuffle(LIST_OF_KEYS)
        randomised_keys_for_all_questions.append(copy.deepcopy(LIST_OF_KEYS))
    return randomised_keys_for_all_questions



@app.route('/add-score')
def add_score():
    pass


def create_ranking():
    ranking = []
    rankline= {}
    rank_list = data_manager.get_ranking()
    for i in range (len(rank_list)):
        rankline["ID"] = rank_list[i]['id']
        rankline["Name"] = rank_list[i]['name']
        rankline["Points"] = rank_list[i]['points']
        rankline_copy = rankline.copy()
        ranking.append(rankline_copy)
    return ranking

