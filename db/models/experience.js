export default (sequelize, DataTypes) => {
    const Experience = sequelize.define(
        'cvExperience',
        {
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
        }, 
        {
            tableName: 'cv_experience'
        }
    );
    
    Experience.associate = (db) => {
        db.cvExperience.belongsTo(db.cvExperiences);
    };

    return Experience;
};