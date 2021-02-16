from flask import Flask, request, render_template, redirect, url_for
import data_manager


app = Flask(__name__)

if __name__ == "__main__":
    app.run()

lvl1 = [{"question_content": "pytanie 1",
         "correct_answer": "odp 1",
         "false_answer_1": "false odp 1",
         "false_answer_2": "false odp 2",
         "false_answer_3": "false odp 3"},

        {"question_content": "pytanie 2",
         "correct_answer": "odp 1",
         "false_answer_1": "false odp 1",
         "false_answer_2": "false odp 2",
         "false_answer_3": "false odp 3"},

        {"question_content": "pytanie 3",
         "correct_answer": "odp 1",
         "false_answer_1": "false odp 1",
         "false_answer_2": "false odp 2",
         "false_answer_3": "false odp 3"}
        ]

# lvl1 = [{pytani1}, {pytanie2}, {pytanie3}]


@app.route('/')
def index():
    return render_template("index.html", questions_lvl1=lvl1)


