import competences from "./competences";

export default (sequelize, DataTypes) => {
    const Formations = sequelize.define(
        'cvFormations', 
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true
            },
            idCompetences: {
                type: DataTypes.UUID,
                references:{
                    model: competences,
                    key: 'id'
                }
            },
        },
        {
            tableName: 'cv_formations'
        }
    );

    Formations.associate = (db) => {
        db.cvFormations.belongsTo(db.cv);
    };

    return Formations;
};