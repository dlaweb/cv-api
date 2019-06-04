export default (sequelize, DataTypes) => {
    const Cv = sequelize.define(
        'cv',
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true
            },
        }, 
        {
            tableName: 'cv'
        }
    );

    Cv.associate = (db) => {
        db.cv.hasMany(db.experiences);
        db.cv.hasMany(db.formations);
        db.cv.hasMany(db.competences);
    };

    return Cv;
};