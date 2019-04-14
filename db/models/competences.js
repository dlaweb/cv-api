
export default (sequelize, DataTypes) => {
    const Competences = sequelize.define('cv_competences', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        idCv: {
            type: DataTypes.UUID,
            //foreign
        },
        idExperence: {
            type: DataTypes.UUID,
            //foreign
        },
    }, {
        // options
        });
    return Competences;
};