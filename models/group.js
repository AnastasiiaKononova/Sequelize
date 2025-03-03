'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.belongsToMany(models.User, {
        through: 'users_to_groups',
        foreignKey: 'group_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Group.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    imagePath: {
      field: 'image_path',
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Group',
    tableName: 'groups',
    underscored: true
    // paranoid: true
  });
  return Group;
};