import experiences from "./experiences";
import formations from "./formations";
import competences from "./competences";

export default (sequelize, DataTypes) => {
    const Cv = sequelize.define('cv', {
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
        informations: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        idCompetences: {
            type: DataTypes.INTEGER,
            references: {
                model: competences,
                key: 'id'
            }
        },
        idFormations: {
            type: Sequelize.INTEGER,
            references: {
                model: formations,
                key: 'id'
            }
        },
        idExperiences: {
            type: Sequelize.INTEGER,
            references: {
                model: experiences,
                key: 'id'
            }
        }
    }, {
        // options
        });
    return Cv;
};