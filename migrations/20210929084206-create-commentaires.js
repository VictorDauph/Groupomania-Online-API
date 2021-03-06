'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      commentId: {
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: { //On peut spécifier tous les attributs de la colonne id:
      type: Sequelize.STRING(100),
      allowNull:false,
  },
    postId: { //On peut spécifier tous les attributs de la colonne id:
      type: Sequelize.INTEGER(11),
      allowNull:false,
  },
    content: { //On peut spécifier tous les attributs de la colonne id:
      type: Sequelize.TEXT,
      allowNull:false,
  },
  flagged:{
    type: Sequelize.BOOLEAN,
    defaultValue:false 
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull:false, 
  },
updatedAt: {
  type: Sequelize.DATE,
  allowNull:false, 
  },

  },);
  await queryInterface.addConstraint('Comments',
    {
    fields: ["userId"],
    type: 'foreign key',
    name: 'userIdCommentFk',
    references: 
    { //Required field
      table: 'Users',
      field: 'userId',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  await queryInterface.addConstraint('Comments',
  {
  fields: ["postId"],
  type: 'foreign key',
  name: 'postIdCommentFk',
  references: 
  { //Required field
    table: 'Posts',
    field: 'postId',
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};