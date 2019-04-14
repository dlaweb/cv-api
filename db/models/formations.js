import cv from "./cv";
import competences from "./competences";

export default (sequelize, DataTypes) => {
    const Formations = sequelize.define('cv_formations', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        idCv: {
            type: DataTypes.UUID,
            references:{
                model: cv,
                key: 'id'
            }
        },
        idCompetences: {
            type: DataTypes.UUID,
            references:{
                model: competences,
                key: 'id'
            }
        },
    }, {
        // options
        });
    return Formations;
};