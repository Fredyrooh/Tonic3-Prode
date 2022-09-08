const User = require("../models/User");
const Tournament = require("../models/Tournament");
const Team = require("../models/Team");
const Player = require("../models/Player");
const Match = require("../models/Match");
const Data_match=require('./Data_match')
User.hasMany(Tournament);
//Tournament.hasMany(Team)
Team.hasMany(Player);
Player.belongsTo(Team);

Team.belongsToMany(Tournament, { through: "tournament_teams" });
Tournament.belongsToMany(Team, { through: "tournament_teams" });


Team.belongsToMany(Match,{as:'matchID',through:"data_match"})
Match.belongsToMany(Team,{as:'teamID',through:"data_match"})

Match.belongsTo(Tournament);


module.exports = { User,Tournament,Team,Player,Match ,Data_match };
