from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/')
def serve_index():
    return send_from_directory('static', 'index.html')

@app.route('/<path:filename>')
def serve_static_files(filename):
    return send_from_directory('static', filename)

@app.route("/api/ask", methods=["POST"])
def ask():
    data = request.json
    messages_raw = data.get("prompt")

    if not messages_raw:
        return jsonify({"error": "Mensajes inválidos"}), 400

    try:
        messages = eval(messages_raw) if isinstance(messages_raw, str) else messages_raw
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=messages
        )
        return jsonify({"response": response.choices[0].message.content})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
