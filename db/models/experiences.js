import experience from "./experience";

export default (sequelize, DataTypes) => {
    const Experiences = sequelize.define(
        'cvExperiences',
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true
            },
        },
        {
            tableName: 'cv_experiences'
        },
    );

    Experiences.associate = (db) => {
        db.cvExperiences.belongsTo(db.cv);
        db.cvExperiences.hasMany(db.cvExperience)
    }
    
    return Experiences;
};