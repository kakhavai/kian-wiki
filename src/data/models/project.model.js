import { DataTypes, Sequelize } from 'sequelize';

const projectModel = (sequelize) => {
  const Project = sequelize.define(
    'Project',
    {
      projectName: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
          len: [0, 30],
        },
      },
      creation: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        validate: {
          isDate: true,
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
  Project.associate = (models) => {
    Project.belongsTo(models.User, { foreignKey: { name: 'creator', allowNull: false }, as: 'creator_' });
  };
};

export { projectModel };
