from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mongodb+srv://prilimarj:12345678#@cluster0.ylej0qf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=True)
    password = db.Column(db.String(120), nullable=True)

    def __repr__(self):
        return f"User('{self.username}')"
