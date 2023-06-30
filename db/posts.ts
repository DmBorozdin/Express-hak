const { DataTypes } = require('sequelize')
export {sequelize} from './test'


export const Posts = sequelize.define('posts',

    // Описание таблиц
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_users: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)