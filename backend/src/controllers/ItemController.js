const Item = require('../models/Item');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const {userId} = req.params;
        const {name, description, value, amount} = req.body;
        const user = await User.findByPk(userId);
        if(!user) {
            return res.status(400).json({ error: 'Usuário não encontrado'});
        }
        const itens = await Item.create({
            name,
            description,
            value,
            amount,
            userId
        });
        return res.json(itens);
    },

    async index(req, res){

        const {userId} = req.params;
        const user = await User.findByPk(userId, {
            include: {
                association: 'itens'
            }
        });
        if(!user){
            return res.status(400).json({error:'Usuário nao encontrado'})
        }
        return res.json(user.itens);
    },

    async destroy(req, res){
        const {id} = req.params;
        const item = await Item.destroy({
            where:{ id }
        });
        if(!item){
            return res.status(400).json({error:'Item não encontrado!'});
        }
        return res.status(201).json({id});
    },

    async update (req, res){
        const {id} = req.params;
        const {name, description, value, amount} = req.body;
        const item = await Item.update({
            name, 
            description,
            value,
            amount
        }, {where:{id}});

        return res.status(200).json(item);
    },

    async show(req, res){
        const {id} = req.params;
        const item = await Item.findOne({
            where: {id}
        })

        return res.json(item);
    }

}