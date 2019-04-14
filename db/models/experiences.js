import experience from "./experience";
import cv from "./cv";

export default (sequelize, DataTypes) => {
    const Experiences = sequelize.define('cv_experiences', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        idCv: {
            type: DataTypes.INTEGER,
            references:{
                model: cv,
                key: 'id'
            }
        },
        idExperience: {
            type: DataTypes.INTEGER,
            references: {
                model: experience,
                key: 'id'
            }
        },
    }, {
        // options
        });
    return Experiences;
};