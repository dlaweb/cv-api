import competences from "./competences";

export default (sequelize, DataTypes) => {
    const Langage = sequelize.define('cv_langage', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        langage: {
            type: DataTypes.STRING,
        },
        idCompetences: {
            type: DataTypes.UUID,
            references:{
                model: competences,
                key: 'id'
            }
        },
        level: {
            type: DataTypes.INTEGER,
        },
    }, {
        // options
        });
    return Langage;
};