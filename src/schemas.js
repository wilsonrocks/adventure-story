export const gameStateSchema = {
  properties: {
    name: {
      type: 'string',
      minLength: 1,
    },
    gameStatus: {
      type: 'string',
      enum: ['inProgress', 'won', 'lost'],
    },
    inventory: {
      type: 'array',
    }
  },
  required: ['name', 'gameStatus', 'inventory'],
};
