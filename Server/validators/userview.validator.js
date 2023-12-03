const {param} = require("express-validator")
const validators = {};


validators.idInParamsValidator = [
    param("identifier")
    .notEmpty().withMessage("Identifier is required")
    .isMongoId().withMessage("Identifier must be a Mongo Id")
]

module.exports = validators;
