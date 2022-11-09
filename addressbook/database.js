const Sequelize = require('sequelize');
const seq = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                            process.env.DB_USER || 'postgres',
                            process.env.DB_PASSWORD || '',{
                                host: process.env.DB_HOST || 'localhost',
                                port: process.env.DB_PORT || 5432,
                                dialect: 'postgres',
                                dialectOptions:{
                                    ssl: process.env.DB_SSL == "true"
                                }
                            });
const Person = seq.define('Person',{
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: true
    },
});
module.exports = {
    sequelize: seq,
    Person: Person
};