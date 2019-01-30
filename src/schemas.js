export const gameStateSchema = {
  properties: {
    gameState: {
      type: 'object',
      properties: {
        character: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              minLength: 1,
            },
            inventory: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        location: {
          type: 'object',
          properties: {
            foe: {
              type: 'object'
            },
            exits: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            items: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    meta: {
      type: 'object',
      properties: {
        gameStatus: {
          type: 'string',
          enum: ['inProgress', 'won', 'lost', 'wantsToQuit', 'quit'],
        },
      },
    },
  },
  required: ['gameState', 'meta'],
};
