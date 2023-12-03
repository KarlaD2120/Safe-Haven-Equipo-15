const { body, param} = require("express-validator")
const validators = {};

validators.createContactValidator = [
    param("identifier")
    .optional()
    .isMongoId().withMessage("Identifier must be a Mongo Id"),
    body("name")
    .notEmpty().withMessage("Nameis required"),
    body("description")
    .optional()
    .isLength({max:200}).withMessage("Description max length is 200 characters"),
    body("image")
    .optional()
    .isURL().withMessage("Image must be an URL"),
    body("email")
    .isEmail().withMessage("This field must be an email")
    

]
validators.idInParamsValidator = [
    param("identifier")
    .notEmpty().withMessage("Identifier is required")
    .isMongoId().withMessage("Identifier must be a Mongo Id")
]

module.exports= validators;
