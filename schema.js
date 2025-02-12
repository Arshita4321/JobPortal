const Joi = require('joi');

// module.exports.listingSchema = Joi.object({
//     listing : Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         location: Joi.string().required(),
//         type: Joi.string().required(),
//         salary: Joi.number().required().min(0),
//         image: Joi.string().allow("", null),
//     }).required()
// });

module.exports.listingSchema = Joi.object({
    Listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        type: Joi.string().required(),
        salary: Joi.number().required().min(0),
        image: Joi.object({
            filename: Joi.string().allow("", null), // Optional filename
            url: Joi.string().allow("", null),      // Optional URL
        }).required(),
    }).required(),
});

