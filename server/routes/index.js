const express = require("express")
const router = express.Router()
const tournament = require("./tournament")
const team = require("./team")
const player = require("./player")
const award = require("./award")
const userRouter = require("./users");
const match=require('./match')
const matches_data=require('./matches_data')
const bet = require("./bet")
const point = require("./points")

router.use('/matches_data',matches_data)
router.use('/match',match)
router.use("/user", userRouter)
router.use("/tournament",tournament)
router.use("/team",team)
router.use("/player",player)
router.use("/award",award)
router.use("/bet",bet)
router.use("/point",point)

module.exports = router
