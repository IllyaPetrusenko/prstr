from flask import Flask, render_template


app = Flask(__name__, template_folder='application/templates', static_folder='application/static')


@app.route("/")
def home():
    return render_template('test.html')


@app.route('/test-test-test')
def test():
    return render_template('new_index.html')


if __name__ == "__main__":
    # test
    # app.run(host="127.0.0.1")
    # prod
    app.run(host="0.0.0.0")
