from flask import Flask, request, render_template, redirect, url_for
import connection


app = Flask(__name__)

if __name__ == "__main__":
    app.run()


@app.route('/')
def index():
    return render_template("index.html")
