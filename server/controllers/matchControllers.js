const Match_services = require("../services/match_services")

class MatchControllers {
    static async setAllMatches(req,res,next){
        if(!req.body)return res.sendStatus(400)
        try{
            const match = await Match_services.setMatchesData(req.body)
            if(!match)return res.sendStatus(404)
            return res.sendStatus(204)
        }
        catch(e){
            console.log(e)
            res.sendStatus(404)
        }
    }
    static async getMatches(req,res){
        const {tournamentId}=req.params
        if(!tournamentId)return res.sendStatus(400)
        try{
            const matches= await Match_services.getAllMatches(tournamentId)
            if(!matches.length)return res.sendStatus(404)
            return res.status(200).send(matches)
        }
        catch(e){
            console.log(e)
            return res.sendStatus(404)
        }
    }
    static async end_matches(req,res){
        if(!req.body.id)return res.sendStatus(404)
        try{
            const match_ended=await Match_services.end_matches(req.body)
            if(match_ended)res.sendStatus(204)
        }catch(e){
            console.log(e)
        }
    }
}

module.exports=MatchControllers