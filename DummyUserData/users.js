import jwt from 'jsonwebtoken'
import config from '../config/envConfig.js'

export const userList=[
    {
        user_Name: "Spiderman",
        id: 1234,
        password: "spd123"
    },
    {
        user_Name: "Ironrman",
        id: 1235,
        password: "iron404"
    }
]

export const getJwtToken=(id)=>{
    return jwt.sign({
        id: id,
    },config.JWT_SECRET,
    {expiresIn: config.JWT_EXPIRY})
}