
export default (sequelize, DataTypes) => {
    const Competences = sequelize.define(
        'cvCompetences', 
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true
            },
            idExperience: {
                type: DataTypes.UUID,
                //relied to an Experience
            },
        },
        {
            tableName: 'cv_competences'
        }
    );

    Competences.associate = (db) => {
        db.cvCompetences.belongsTo(db.cv);
        db.cvCompetences.hasMany(db.langage);
    };

    return Competences;
};