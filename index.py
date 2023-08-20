from flask import Flask, request,render_template,redirect
import requests

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def send_message():
    chat_id_1 = '1107759940'
    chat_id = '-930119991'  # Replace with the Telegram bot chat ID
    api_token = '6669191552:AAHknKSIT2kMeog39Qx7eS2RijzBhStvwDQ'  # Replace with your Telegram bot API token

    name = request.form['name']
    tel = request.form['tel']
    maydon = request.form['maydon']
    message = request.form['message']
    text = f"Ism: {name}\nTelefon: {tel}\nMaydon: {maydon}\nXabar: {message}"

    api_url = f"https://api.telegram.org/bot{api_token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': text
    }

    response = requests.post(api_url, json=payload)
    if response.ok:
        return redirect("/")
    
    else:
        return 'Failed to send message', 500

app.debug = True
app.run(host='0.0.0.0' ,port=5000)