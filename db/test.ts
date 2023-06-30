const { Sequelize } = require('sequelize-typescript')


export const sequelize = new Sequelize('postgres://postgres:3598@localhost:5432/postgres',
    {
        dialect:"postgres",
        models:[`${__dirname}/models/`]
    })
