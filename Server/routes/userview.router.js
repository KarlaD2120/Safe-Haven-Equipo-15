const express = require("express");
const router= express.Router();
const { idInParamsValidator } = require("../validators/userview.validator");
const userviewController= require("../controllers/userview.controller");
const validateFields = require("../validators/index.middleware");
const { authentication, authorization } = require("../middlewares/auth.middlewares");
const ROLES = require("../data/roles.constants.json");

// /api/article/...
router.get("/", userviewController.findAll);
router.get("/:identifier", idInParamsValidator, validateFields, userviewController.findOneById);
router.delete("/:identifier", authentication, authorization(ROLES.ADMIN), idInParamsValidator, validateFields, userviewController.deleteById);

module.exports = router;
