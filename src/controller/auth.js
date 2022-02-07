const jwt = require('jsonwebtoken')

 function createToken(user){
const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15s'})
        const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
        const access_token_response = {
            access_token: accessToken,
            expiresIn: 1500,
            refresh_token:refreshToken
        }

        return access_token_response
}


async function validateToken(req,res,next){
    const authHeaders = req.headers['authorization']
    const token = authHeaders ? authHeaders.split(' ')[1] : null

    if(token=='undefined') return res.sendStatus(401)

    const ver =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) =>{
       if(err) return res.sendStatus(403)
       req.user = user
       next()
    })
   


}

async function refreshToken(req,res){

    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshToken.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET, (err,user) => {
            if(err) return res.sendStatus(403)
            console.log(user)
        const accessToken =  createToken({
            name:user.name,
            email:user.email,
            status:user.status,
            role:user.role,
        })
        res.json(accessToken)
        }
    )

    
}

module.exports={
    createToken,
    validateToken,
    refreshToken,
}