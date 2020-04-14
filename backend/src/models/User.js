const {Model, DataTypes} = require('sequelize');

class User extends Model{

    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            idLogin: DataTypes.STRING
        },{
            sequelize: connection
        });
    }

    static associate(models){
        this.hasMany(models.Item, {foreignKey: 'userId', as: 'itens'})
    }
}

module.exports = User;