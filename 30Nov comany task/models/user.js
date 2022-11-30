'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.role,{through:'user_role'})
    }
  }
  user.init({
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:true
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        len:[5,100]
      }
    },
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};