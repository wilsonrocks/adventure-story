export const chracterSchema = {
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
};

export const locationSchema = {
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
};

export const gameSchema = {
  type: 'object',
  properties: {
    character: chracterSchema,
    location: locationSchema,
  },
  required: ['character', 'location'],
};

export const metaSchema = {
  type: 'object',
  properties: {
    gameStatus: {
      type: 'string',
      enum: ['inProgress', 'won', 'lost', 'wantsToQuit', 'quit'],
    },
  },
  required: ['gameStatus'],
};

export const stateSchema = {
  properties: {
    game: gameSchema,
    meta: metaSchema,
  },
  required: ['game', 'meta'],
};
