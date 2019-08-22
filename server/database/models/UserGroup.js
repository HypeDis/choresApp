const Sequelize = require('sequelize');
const db = require('./../db');

const UserGroup = db.define('userGroup', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    groupId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = UserGroup

