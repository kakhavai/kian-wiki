const swaggerDocument = {
  swagger: '2.0',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/project/': {
      get: {
        summary: 'Lists all the projects',
        tags: ['project'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Returns a list',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
        },
      },
      post: {
        summary: 'Creates a project',
        tags: ['project'],
        parameters: [
          {
            name: 'project',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateProject',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Returns a new project',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateProject',
            },
          },
        },
      },
    },
    '/project/{projectName}': {
      get: {
        summary: 'Gets a project by its primary key',
        tags: ['project'],
        parameters: [
          {
            name: 'projectName',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'Returns a project with primary key',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
        },
      },
      delete: {
        summary: 'Deletes a project by its primary key',
        tags: ['project'],
        parameters: [
          {
            name: 'projectName',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      put: {
        summary: 'Overrides the values of a project',
        tags: ['project'],
        parameters: [
          {
            name: 'projectName',
            in: 'path',
            required: true,
            schema: {
              $ref: '#/definitions/Project',
            },
          },
          {
            name: 'project',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateProject',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a project',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
        },
      },
      patch: {
        tags: ['project'],
        summary: 'patch a project',
        parameters: [
          {
            name: 'projectName',
            in: 'path',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
          {
            name: 'project',
            in: 'body',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateProject',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a project and its partially overwritten values',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
        },
      },
    },

    '/user/': {
      get: {
        summary: 'Lists all the users',
        tags: ['user'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Returns a list',
            schema: {
              $ref: '#/definitions/User',
            },
          },
        },
      },
      post: {
        summary: 'Creates a user',
        tags: ['user'],
        parameters: [
          {
            name: 'user',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateUser',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Returns a new user',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateUser',
            },
          },
        },
      },
    },
    '/user/{id}': {
      get: {
        summary: 'Gets a user by its primary key',
        tags: ['user'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'Returns a user with primary key',
            schema: {
              $ref: '#/definitions/User',
            },
          },
        },
      },
      delete: {
        summary: 'Deletes a user by its primary key',
        tags: ['user'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      put: {
        summary: 'Overrides the values of a user',
        tags: ['user'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              $ref: '#/definitions/User',
            },
          },
          {
            name: 'user',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateUser',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a user',
            schema: {
              $ref: '#/definitions/User',
            },
          },
        },
      },
      patch: {
        tags: ['user'],
        summary: 'patch a user',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/User',
            },
          },
          {
            name: 'user',
            in: 'body',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateUser',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a user and its partially overwritten values',
            schema: {
              $ref: '#/definitions/User',
            },
          },
        },
      },
    },
  },
  definitions: {
    Project: {
      required: ['projectName', 'creator'],
      properties: {
        projectName: {
          type: 'string',
          uniqueItems: true,
          maxLength: 30,
        },
        creation: {
          type: 'string',
          format: 'date-time',
        },
        creator: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
        },
      },
    },

    User: {
      required: ['username'],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
          readOnly: true,
        },
        username: {
          type: 'string',
          maxLength: 80,
        },
        firstName: {
          type: 'string',
          maxLength: 80,
        },
        lastName: {
          type: 'string',
          maxLength: 80,
        },
        createdProjects: {
          type: 'array',
          items: {
            type: 'string',
            maxLength: 30,
          },
          uniqueItems: true,
        },
      },
    },
  },
  createUpdateDef: {
    CreateUpdateProject: {
      required: ['projectName', 'creator'],
      properties: {
        projectName: {
          type: 'string',
          uniqueItems: true,
          maxLength: 30,
        },
        creation: {
          type: 'string',
          format: 'date-time',
        },
        creator: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
        },
      },
    },

    CreateUpdateUser: {
      required: ['username'],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
          readOnly: true,
        },
        username: {
          type: 'string',
          maxLength: 80,
        },
        firstName: {
          type: 'string',
          maxLength: 80,
        },
        lastName: {
          type: 'string',
          maxLength: 80,
        },
      },
    },
  },
};

export { swaggerDocument };
