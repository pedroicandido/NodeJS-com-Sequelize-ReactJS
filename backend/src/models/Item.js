const {Model, DataTypes} = require('sequelize');

class Item extends Model{
    //Metodo padrao para todo Model. Recebe a conexao com a base de dados;
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            value: DataTypes.DOUBLE,
            amount: DataTypes.INTEGER,

        },
        {
            sequelize: connection
        });
    }

    static associate(models){
        this.belongsTo(models.User, {
            foreignKey:'userId',
            as: 'owner'
        })
    }
}

module.exports = Item;