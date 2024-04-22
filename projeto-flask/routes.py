from flask import jsonify, render_template, request
from models import User
from app import app


@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    serialized_users = [user.serialize() for user in users]
    return jsonify(serialized_users)


@app.route('/create_user', methods=['POST'])
def create_user():
    return jsonify({'message': 'User created successfully'})


@app.route('/delete_user', methods=['POST'])
def delete_user():
    return jsonify({'message': 'User deleted successfully'})


@app.route('/update_user', methods=['POST'])
def update_user():
    return jsonify({'message': 'User updated successfully'})


@app.route('/read_user', methods=['POST'])
def read_user():
    return jsonify({'message': 'User read successfully'})


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
    return render_template('cadastro.html')


