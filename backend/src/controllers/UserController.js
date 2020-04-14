const User = require('../models/User');
const crypto = require('crypto');

module.exports = {
    async store(req, res){
        const {name, email} = req.body;
        const idLogin = crypto.randomBytes(4).toString('HEX');
        
        const[user, created] = await User.findOrCreate({
            where: {email},
            defaults: {
                name,
                email, 
                idLogin
            }
        });
        if(created) return res.json(user);   
        return res.status(400).json({message: "Email já cadastrado."})
    },

    async show(req, res){
        const {idLogin} = req.body;
        const user = await User.findOne({
            where: {
                idLogin
            }
        });
        if(!user){
            return res.status(400).json({error: "Usuário nao cadastrado."});
        }
        return res.json(user);
    }
}