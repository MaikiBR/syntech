import sys
from os.path import dirname, abspath

sys.path.append(dirname(abspath(__file__)))

from flask import Flask, request, jsonify
from syntechparser import parser
from syntechlexer import lexer

app = Flask(__name__)

@app.route('/api/parse', methods=['POST'])
def parse_text():
    data = request.get_json()
    s = data.get('text', '')
    result = parser.parse(s, lexer=lexer)
    response = {'result': result}
    return jsonify(response)

if __name__ == "__main__":
    app.run()
