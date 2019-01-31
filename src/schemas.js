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
          required: ['name', 'inventory'],
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
          required: ['foe', 'exits', 'items'],
        },
      },
      required: ['character', 'location'],
    },
    meta: {
      type: 'object',
      properties: {
        gameStatus: {
          type: 'string',
          enum: ['inProgress', 'won', 'lost', 'wantsToQuit', 'quit'],
        },
      },
      required: ['gameStatus'],
    },
  },
  required: ['gameState', 'meta'],
};
