import Joi from '@hapi/joi';

const validateUser = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
    cpf: Joi.string().length(11).required()

})


export { validateUser }
