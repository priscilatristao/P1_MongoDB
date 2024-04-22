const User = require('../models/user');

class UserRepository {
    async createUser(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            throw error;
        }
    }

    async findUserById(userId) {
        try {
            return await User.findById(userId);
        } catch (error) {
            throw error;
        }
    }

    async updateUser(userId, newData) {
        try {
            return await User.findByIdAndUpdate(userId, newData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            return await User.findByIdAndDelete(userId);
        } catch (error) {
            throw error;
        }
    }

    async findUserByUsername(username) {
        try {
            return await User.findOne({ username });
        } catch (error) {
            throw error;
        }
    }

    // Outras funções CRUD conforme necessário
}

module.exports = new UserRepository();

