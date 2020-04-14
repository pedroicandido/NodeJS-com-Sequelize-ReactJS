'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('items', { 
        id: {
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        userId:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model: 'users',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'CASCADE'
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description:Sequelize.STRING,
        createdAt:{
          type: Sequelize.DATE,
          allowNull: false
        },
        value:{
          type: Sequelize.DOUBLE,
          allowNull: false
        },
        amount:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        updatedAt:{
          type: Sequelize.DATE,
          allowNull: false
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('items');
    
  }
};
