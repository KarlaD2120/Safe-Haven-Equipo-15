const { body, param} = require("express-validator")
const validators = {};

validators.createEmergencycaseValidator = [
    // param("identifier")
    // .isMongoId().withMessage("Identifier must be a Mongo Id"),
    body("coordenates")
    .notEmpty().withMessage("Coordenates are required")
    .isLatLong().withMessage("This field is required to have lattitude and longitude data"),
    body("date")
    // .notEmpty().withMessage("Date is required")
    .isDate().withMessage("Date must be a date data type")
    .optional()

]
validators.idInParamsValidator = [
    param("identifier")
    .notEmpty().withMessage("Identifier is required")
    .isMongoId().withMessage("Identifier must be a Mongo Id")
]

module.exports= validators;