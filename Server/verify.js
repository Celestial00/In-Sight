const jwt = require('jsonwebtoken')

const verifyToken = (req, res , next) =>{

    const token = req.cookies.Token
    if(!token){
        return res.status(401).json("you are not authenticate")
    }

    jwt.verify(token, process.env.KEY, async (err, data) =>{

        if(err){

            return res.status(403).json('token is invalid')

        }
        req.userId = data.id
        next()
    })

} 


module.exports = verifyToken