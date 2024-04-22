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
    # Lógica para criar um novo usuário
    return jsonify({'message': 'User created successfully'})


@app.route('/delete_user', methods=['POST'])
def delete_user():
    # Lógica para excluir um usuário existente
    return jsonify({'message': 'User deleted successfully'})


@app.route('/update_user', methods=['POST'])
def update_user():
    # Lógica para atualizar informações de um usuário existente
    return jsonify({'message': 'User updated successfully'})


@app.route('/read_user', methods=['POST'])
def read_user():
    # Lógica para ler as informações de um usuário existente
    return jsonify({'message': 'User read successfully'})


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Lógica de autenticação
        username = request.form['username']
        password = request.form['password']
        # Verifique as credenciais do usuário e execute as ações apropriadas
    return render_template('cadastro.html')


