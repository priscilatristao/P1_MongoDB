

from flask import Flask, request, jsonify

app = Flask(__name__)


users = {}


@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.get_json()
    username = data.get('username')

    if username in users:
        return jsonify({'message': 'Username already exists'}), 400

    users[username] = data
    return jsonify({'message': 'User created successfully'}), 201


@app.route('/check_user', methods=['POST'])
def check_user():
    data = request.get_json()
    username = data.get('username')

    exists = username in users
    return jsonify({'exists': exists})


if __name__ == '__main__':
    app.run(debug=True)
