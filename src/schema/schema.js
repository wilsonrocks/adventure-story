const characterProperties = {
  characterName: {
    type: 'string',
    minLength: 1,
  },
  characterInventory: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
};


const fullSchema = {
  type: 'object',
  properties: {
    ...characterProperties,
    foeKind: {
      type: 'string',
      enum: ['orc', 'giraffe'],
    },
    exits: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    loot: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    gameStatus: {
      type: 'string',
      enum: ['inProgress', 'won', 'lost', 'wantsToQuit', 'quit'],
    },
  },
  required: [
    'characterName',
    'characterInventory',
    'foeKind',
    'exits',
    'loot',
    'gameStatus',
  ],
};

export {
  fullSchema,
  characterProperties,
};
