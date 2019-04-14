import competences from "./competences";

export default (sequelize, DataTypes) => {
    const Langage = sequelize.define(
        'cvLangage', 
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true
            },
            langage: {
                type: DataTypes.STRING,
            },
            level: {
                type: DataTypes.INTEGER,
            },
        }, 
        {
            tableName: 'cv_langage'
        }
    );

    Langage.associate = (db) => {
        db.cvLangage.belongsTo(db.cvCompetences)
    }
    return Langage;
};