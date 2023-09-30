const {v4} = require("uuid");
const {validationResult} = require("express-validator");

const commonUtil = {
    encode : (data) => {
        let buf = Buffer.from(data);
        let base64 = buf.toString("base64");
        return base64;
    },

    uuid : () => {
        const tokens = v4().split('-')
        return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
    },

    validation : (req, res, next) => {
        let errors = validationResult(req)
        if(errors.array().length > 0) {
            res.json({ success : false, message : errors.array()[0].msg })
        } else {
            next()
        }
    }
}

module.exports = commonUtil