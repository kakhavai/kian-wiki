import { customNew } from '../utils/adminbro/handlers';
import { sequelize } from '../../data/models';

const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');

AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: sequelize.models.Project,
      options: {
        parent: {
          name: 'Database',
          icon: 'Api',
        },
        listProperties: ['projectName', 'creation'],
        actions: {
          new: {
            handler: customNew,
          },
        },
        properties: {
          projectName: {
            isVisible: true,
            isRequired: true,
          },
        },
      },
    },
    {
      resource: sequelize.models.User,
      options: {
        parent: {
          name: 'Database',
          icon: 'Api',
        },
        listProperties: ['id', 'username', 'firstName', 'lastName'],
      },
    },
  ],
  branding: {
    companyName: 'Database dashboard',
    softwareBrothers: false,
    logo: false,
    favicon: 'https://imagine.ai/img/favicon.ico',
  },
});
const router = AdminBroExpress.buildRouter(adminBro);

export { router as adminbroRouter };
