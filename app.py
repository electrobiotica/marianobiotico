from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='static')
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/")
def index():
    return send_from_directory('static', 'index.html')

@app.route("/api/ask", methods=["POST"])
def ask():
    data = request.json
    messages_raw = data.get("prompt")

    try:
        messages = eval(messages_raw) if isinstance(messages_raw, str) else messages_raw
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=messages
        )
        return jsonify({"response": response.choices[0].message.content})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if not messages or not isinstance(messages, list):
    return jsonify({"error": "Mensajes inválidos"}), 400

if __name__ == "__main__":
    app.run(debug=True)

