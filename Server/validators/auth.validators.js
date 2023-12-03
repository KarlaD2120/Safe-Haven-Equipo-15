const { body } = require("express-validator");
const validators = {};
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

validators.registerValidator = [
body("username")
.notEmpty().withMessage("User is required")
.isLength({ min: 4, max:32 }).withMessage("Username format incorrect"),
body("email")
.notEmpty().withMessage("Email is required")
.isEmail().withMessage("Email format incorrect"),
body("password")
.notEmpty().withMessage("Password is required")
.matches(passwordRegexp).withMessage("Password format incorrect")

];




module.exports = validators;
