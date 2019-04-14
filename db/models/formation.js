import formations from "./formations";

export default (sequelize, DataTypes) => {
    const Formation = sequelize.define('cv_formation', {
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
        idFormations: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: formations
            }
        },
    }, {
        // options
        });
    return Formation;
};