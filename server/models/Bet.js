const db = require('../config/db')
const S = require('sequelize')
const Match = require('./Match')


class Bet extends S.Model { }


Bet.init({
    winner_id: {
        type: S.INTEGER,
    },
    goals: {
        type: S.INTEGER
    },
    cards: {
        type: S.INTEGER
    },
    faults: {
        type: S.INTEGER
    },
    possession: {
        type: S.INTEGER
    },
    player_goals: {
        type: S.INTEGER,
    },
    tournamentId: {
        type: S.INTEGER
    }
}, { sequelize: db, modelName: 'bet' })


module.exports=Bet