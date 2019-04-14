export default (sequelize, DataTypes) => {
    const Formation = sequelize.define(
        'cvFormation', 
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true
            },
            date: {
                type: DataTypes.DATEONLY,
            },
            ecole: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: 'cv_formation'
        }
    );

    Formation.associate = (db) => {
        db.cvFormation.belongsTo(db.cvFormations);
    };

    return Formation;
};