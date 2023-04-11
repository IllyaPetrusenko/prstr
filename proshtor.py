import asyncio
from flask import Flask, render_template, make_response, request, jsonify
import telegram

app = Flask(__name__, template_folder='application/templates', static_folder='application/static')


@app.route("/")
def home():
    return render_template('test.html')


# @app.route('/test-test-test')
# def test():
#     return render_template('index.html')


@app.route('/callback', methods=['POST'])
def callback():
    json_data = request.get_json()
    name = json_data['name']
    phone = json_data['phone']
    comment = json_data['comment']

    text = f'**** Нове звернення ****\nІмʼя: {name}\nТелефон: {phone}\nКоментарій: {comment}'

    bot = telegram.Bot(token='6018637295:AAGd2neraCJFjGSpOIlX3YFIfqVnEQtbl0c')

    async def main():
        await bot.send_message(chat_id='-1001693907109', text=text)
    asyncio.run(main())

    return make_response('Created', 201)


if __name__ == "__main__":
    # test
    app.run(host="127.0.0.1")
    # prod
    # app.run(host="0.0.0.0")

