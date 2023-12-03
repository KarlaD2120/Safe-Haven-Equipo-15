const express = require("express");
const router = express.Router();

const contactRouter= require("./contact.router");
const authRouter= require("./auth.router");
const emergencycaseRouter= require("./emergencycase.router");
const userviewRouter = require("./userview.router");


// /api/...
router.use("/contact", contactRouter );
router.use("/emergencycase",emergencycaseRouter);
router.use("/auth", authRouter);
router.use("/userview", userviewRouter)

module.exports = router;