const Joi = require('joi')

function registerValidator(data) {
  const rule = Joi.object({
    email: Joi.string().min(6).max(225).required().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
    createdAt: Joi.string(),
  })
  return rule.validate(data)
}
function loginValidator(data) {
  const rule = Joi.object({
    email: Joi.string().min(6).max(225).required().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
  })
  return rule.validate(data)
}

module.exports = registerValidator
module.exports = loginValidator
