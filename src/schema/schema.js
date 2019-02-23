const fullSchema = {
  definitions: {
    character: {
      type: 'object',
      properties: {
        characterName: {
          type: 'string',
          minLength: 1,
        },
        characterInventory: {
          type: 'array',
          items: {
          },
        },
        characterRace: {
          type: 'string',
          enum: ['human', 'dwarf', 'elf'],
        },
      },
      required: [
        'characterName',
        'characterInventory',
        'characterRace',
      ],
    },
    nonCharacter: {
      type: 'object',
      properties: {
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
        story: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      required: [
        'foeKind',
        'exits',
        'loot',
        'gameStatus',
        'story',
      ],
    },
  },

  allOf: [
    {
      $ref: '#/definitions/character',
    },
    {
      $ref: '#/definitions/nonCharacter',
    },
  ],

};

export default fullSchema;
