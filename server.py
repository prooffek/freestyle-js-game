from flask import Flask, request, render_template, redirect, url_for
import data_manager


app = Flask(__name__)

if __name__ == "__main__":
    app.run()

lvl1 = data_manager.questions(1)

# lvl1 = [{pytani1}, {pytanie2}, {pytanie3}]


@app.route('/')
def index():
    return render_template("index.html", questions_lvl1=lvl1)


