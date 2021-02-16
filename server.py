from flask import Flask, request, render_template, redirect, url_for
import data_manager
NUMBER_OF_QUESTIONS = 3


app = Flask(__name__)

if __name__ == "__main__":
    app.run()

lvl1 = data_manager.questions(1)

# lvl1 = [{pytani1}, {pytanie2}, {pytanie3}]


@app.route('/')
def index():
    all_data = create_list() # [{pytanie, dobra odpowiedź, zła odpowiedź1, zła odpowiedź2, zła odpowiedź3},{}....]
    return render_template("index.html", questions_lvl1=lvl1)


def create_list():
    questions = data_manager.get_questions()
    all_data = []
    single_qa = {}
    for i in range (0,NUMBER_OF_QUESTIONS):
        single_qa["content"] = questions[i]["question"]
        answer = data_manager.get_answers_to_question(i+1)
        single_qa["good_answer"] = answer[0]["answer"]
        single_qa["false_answer1"] = answer[1]["answer"]
        single_qa["false_answer2"] = answer[2]["answer"]
        single_qa["false_answer3"] = answer[3]["answer"]
        single_qa_copy = single_qa.copy()
        all_data.append(single_qa_copy)
    return all_data
