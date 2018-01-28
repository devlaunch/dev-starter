const schema = {
  type: 'object',
  properties: {
    article: {
      type: 'array',
      minItems: 10,
      maxItems: 30,
      items: {
        $ref: '#/definitions/Article',
      },
    },
    profile: {
      type: 'array',
      minItems: 10,
      maxItems: 10,
      items: {
        $ref: '#/definitions/Profile',
      },
    },
    user: {
      type: 'array',
      minItems: 10,
      maxItems: 10,
      items: {
        $ref: '#/definitions/User',
      },
    },
  },
  required: ['user', 'article', 'profile'],
  definitions: {
    PositiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true,
    },
    User: {
      type: 'object',
      properties: {
        id: {
          $ref: '#/definitions/PositiveInt',
        },
        username: {
          type: 'string',
          faker: 'name.findName',
        },
        password: {
          type: 'string',
          faker: 'internet.password',
        },
        email: {
          type: 'string',
          format: 'email',
          faker: 'internet.email',
        },
      },
      required: ['id', 'username', 'email', 'password'],
    },
    Bio: {
      type: 'object',
      properties: {
        id: {
          $ref: '#/definitions/PositiveInt',
        },
        username: {
          type: 'string',
          faker: 'name.findName',
        },
        email: {
          type: 'string',
          format: 'email',
          faker: 'internet.email',
        },
        bio: {
          type: 'string',
          faker: 'lorem.sentence',
        },
        image: {
          type: 'string',
          faker: 'internet.avatar',
        },
        following: {
          type: 'boolean',
          faker: 'random.boolean',
        },
      },
      required: ['id', 'username', 'email', 'bio', 'image', 'following'],
    },
    Profile: {
      type: 'object',
      allOf: [{ $ref: '#/definitions/User' }, { $ref: '#/definitions/Bio' }],
    },
    Article: {
      type: 'object',
      properties: {
        slug: {
          type: 'string',
          faker: 'lorem.slug',
        },
        title: {
          type: 'string',
          faker: 'lorem.sentence',
        },
        description: {
          type: 'string',
          faker: 'lorem.paragraph',
        },
        body: {
          type: 'string',
          faker: 'lorem.paragraphs',
        },
        tagList: {
          type: 'array',
          items: {
            type: 'string',
            faker: 'lorem.word',
          },
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          faker: 'date.past',
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          faker: 'date.recent',
        },
        favorited: {
          type: 'boolean',
          faker: 'random.boolean',
        },
        favoritesCount: {
          type: 'integer',
          faker: {
            'random.number': [100],
          },
        },
        author: {
          $ref: '#/definitions/Bio',
        },
        comment: {
          type: 'array',
          items: {
            $ref: '#/definitions/Comment',
          },
        },
      },
      required: [
        'slug',
        'title',
        'description',
        'body',
        'tagList',
        'createdAt',
        'updatedAt',
        'favorited',
        'favoritesCount',
        'author',
        'comment',
      ],
    },
    Comment: {
      type: 'object',
      properties: {
        id: {
          $ref: '#/definitions/PositiveInt',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          faker: 'date.past',
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          faker: 'date.recent',
        },
        body: {
          type: 'string',
          faker: 'lorem.paragraph',
        },
        author: {
          $ref: '#/definitions/Bio',
        },
      },
      required: ['id', 'createdAt', 'updatedAt', 'body', 'author'],
    },
  },
};
export default schema;
