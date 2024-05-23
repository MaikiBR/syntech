import json
from lexer import lexer
from parser import parser
from http.server import BaseHTTPRequestHandler, HTTPServer


class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)

        s = data.get('text', '')
        result = parser.parse(s, lexer=lexer)

        response = {
            'result': result
        }

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode())


def run(server_class=HTTPServer, handler_class=Handler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()


if __name__ == "__main__":
    run()
