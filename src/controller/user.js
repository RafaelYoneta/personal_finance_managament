const bcrypt = require('bcrypt')
const userModel = require('../model/userModel.js')
const auth = require('../controller/auth')

async function createUser(req,res){

    //next step: check if the user already exists

    const {
        name,
        email,
        password,
        role,

    }=req.body

    const salt = await bcrypt.genSalt() 
    const cryptoPassword = await bcrypt.hash(password,salt)

    const new_user = new userModel({
        name,
        email,
        status:"Active",
        role:role,
        hash:cryptoPassword,
        createAt:new Date(),
        updatedAt:null,
        removedAt:null,        
    })

    const savedUser = await new_user.save()

    res.send(savedUser)
}

async function login(req,res){
    
    const {
        email,
        password,
    } = req.body

    const user = await userModel.find({email:email})

    const user_token = {
        name:user[0].name,
        email:user[0].email,
        status:user[0].status,
        role:user[0].role,
    }

    const authenticateUser = await bcrypt.compare(password,user[0].hash)

    if(authenticateUser){

        const access_token = auth.createToken(user_token)
        res.json(access_token)
        
    }else{
        res.sendStatus(404)
    }
}

module.exports = {
    login,
    createUser,
}