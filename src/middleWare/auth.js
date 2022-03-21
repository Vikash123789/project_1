const jwt = require("jsonwebtoken")



const authentication = function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]
        if (!token) {
            res.status(404).send({ status: false, msg: 'Token Mandatory' })
        }

        let decodedToken = jwt.verify(token, "functionUp")
        if (!decodedToken) {
            res.status(400).send({ status: false, msg: 'Invalid Token' })
        }

        req.authorId = decodedToken.authorId;
        next()
    }
    catch (error) {
        res.status(500).send({ status: false, data: error.message })
    }

}






module.exports.authentication = authentication;
