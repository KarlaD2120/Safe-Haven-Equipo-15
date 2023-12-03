const express = require("express");
const router= express.Router();
const { createEmergencycaseValidator, idInParamsValidator } = require("../validators/emergencycase.validator");
const emergencycaseController = require("../controllers/emergencycase.controller");
const validateFields = require("../validators/index.middleware");
const { authentication, authorization } = require("../middlewares/auth.middlewares");
const ROLES = require("../data/roles.constants.json");

// /api/article/...
router.get("/", emergencycaseController.findAll);
router.get("/own", 
authentication,
authorization(ROLES.USER),
emergencycaseController.findOwn
);
router.get("/user/:identifier", idInParamsValidator, validateFields,emergencycaseController.findByUser);
router.get("/:identifier", idInParamsValidator, validateFields, emergencycaseController.findOneById);
router.post("/", authentication, authorization(ROLES.USER), createEmergencycaseValidator, validateFields, emergencycaseController.saving);

router.delete("/:identifier", authentication, authorization(ROLES.ADMIN), idInParamsValidator, validateFields, emergencycaseController.deleteById);

module.exports = router;
