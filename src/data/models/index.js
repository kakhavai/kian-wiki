import Sequelize from 'sequelize';
import config from 'config';

import { projectModel } from './project.model';
import { userModel } from './user.model';

const pg = require('pg');

// https://github.com/sequelize/sequelize/issues/4550
pg.defaults.parseInt8 = true;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config,
});

projectModel(sequelize);
userModel(sequelize);

const { Project, User } = sequelize.models;

Project.associate(sequelize.models);
User.associate(sequelize.models);

if (process.env.NODE_ENV !== 'test' && !process.env.USE_MIGRATIONS) {
  sequelize.sync({ alter: true });
}

export { sequelize, Project, User };
