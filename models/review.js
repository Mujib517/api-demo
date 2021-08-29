'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Review extends Model {

        static associate(models) {
            Review.belongsTo(models.Book, {
                foreignKey: 'bookId',
                onDelete: 'CASCADE'
            });
        }
    };

    Review.init({
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: DataTypes.STRING,
        rating: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Review',
    });

    return Review;
};