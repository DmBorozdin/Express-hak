const { DataTypes } = require('sequelize')
export {sequelize} from './test'

export const Users = sequelize.define('users',
    // Описание таблиц
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

