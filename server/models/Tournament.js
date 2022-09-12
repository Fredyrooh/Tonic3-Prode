const S = require("sequelize")
const db = require("../config/db")
const Match = require("./Match")

class Tournament extends S.Model { }

Tournament.init({
      name : {
        type : S.STRING,
        allowNull: false,
      },
      logo : {
        type : S.STRING
      },
      description : {
        type : S.TEXT
      },
      participants : {
        type: S.INTEGER
      },
      phase : {
        type: S.INTEGER
      },
      state : {
        type : S.BOOLEAN,
        defaultValue : false
      }
}, { sequelize: db, modelName: "tournament" })

Tournament.addHook("afterCreate",(tournament)=>{
  const matches = tournament.participants
  let fase = matches/2
  let data = []
  let contador = 0
  for (let i = 0; i < matches; i++) {
    
   let grupo= Math.ceil((i+1)/2)
   let next=(matches/2)+grupo
   if(i+2>=matches) next = null
   
   data.push({
    match_end : false,
    tournamentId: tournament.id,
    fase:fase,
    match: i+1,
    next:next
  })
  
  

  contador ++
  if(contador===fase){
    fase=fase/2
    contador = 0
  }
} 
  Match.bulkCreate(data)
})

module.exports = Tournament


