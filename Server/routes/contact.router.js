const express = require("express");
const router= express.Router();
const { createContactValidator, idInParamsValidator } = require("../validators/contact.validators");
const contactController = require("../controllers/contact.controller");
const validateFields = require("../validators/index.middleware");
const { authentication, authorization } = require("../middlewares/auth.middlewares");
const ROLES = require("../data/roles.constants.json");

// /api/article/...
router.get("/", contactController.findAll);
router.get("/own", 
authentication,
authorization(ROLES.USER),
contactController.findOwn
);
router.get("/user/:identifier", idInParamsValidator, validateFields,contactController.findByUser);
router.get("/:identifier", idInParamsValidator, validateFields, contactController.findOneById);
 router.post(["/","/:identifier"], authentication, authorization(ROLES.USER), createContactValidator, validateFields, contactController.saving);

router.delete("/:identifier", authentication, authorization(ROLES.USER), idInParamsValidator, validateFields, contactController.deleteById);

module.exports = router;
