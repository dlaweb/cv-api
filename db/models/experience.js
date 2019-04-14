import experiences from "./experiences";

export default (sequelize, DataTypes) => {
    const Experience = sequelize.define('cv_experience', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
        },
        entreprise: {
            type: DataTypes.STRING,
        },
        idExperiences: {
            type: DataTypes.INTEGER,
            reference: {
                key: 'id',
                model: experiences
            }
        },
    }, {
        // options
        });
    return Experience;
};