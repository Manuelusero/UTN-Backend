 import ENVIROMENT from "../config/enviroment.config.js"
 import User from "../models/user.model.js"
 import ResponseBuilder from "../utils/builders/responseBuilder.js"
 import bcrypt from "bcrypt"
 import jwt from "jsonwebtoken"
 
 export const registerUserController = async(req, res) => {
    try{
        const{name, email, password} = req.body
      const existentUser = await User.findOne({email: email})
      console.log({existentUser})
      if(existentUser){
        const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(400)
        .setMessage('Bad request')
        .setPayload({
           detail: 'El mail ya esta en uso'
        }
       )
    .build()
     return res.status(400).json(response)
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const verificationToken = jwt.sign({email: email}, ENVIROMENT.JWT_SECRET,{
        expiresIn: '1d'
    })

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        verificationToken: verificationToken
    })

    await newUser.save()

    const response = new ResponseBuilder()
    .setOk(true)
    .setStatus(200)
    .setMessage('Created')
    .setPayload({})
    .build()
    res.status(201).json(response)
    }
    catch(error){
        console.error ('Error al registrar el usuario', error)
        const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(500)
        .setMessage('Internal Server Error')
        .setPayload({
            detail: error.message
            }
        )
        .build()
       return res.status(500).json(response)
    }

}

const resultado =bcrypt.compareSync('pepe123', '$2b$10$z/R/J6lv4cSJL5DLZ4G/wOJ.13WT4U49TIHhiNKwvhZrXEsC3/di.')
console.log({resultado})