const justAnOrc = {
  characterName: 'justAnOrc',
  characterInventory: [],
  characterRace: 'elf',
  foeKind: 'orc',
  exits: [],
  loot: [],
  gameStatus: 'inProgress',
  story: [],
};

const elfWithLoot = {
  characterName: 'elfWithLoot',
  characterInventory: [],
  characterRace: 'elf',
  foeKind: 'orc',
  exits: [],
  loot: ['potion', 'mace'],
  gameStatus: 'inProgress',
  story: [],
};

const jimWithDaggerAndPotion = {
  characterName: 'jimWithDaggerAndPotion',
  characterInventory: ['dagger', 'potion'],
  characterRace: 'human',
  foeKind: 'orc',
  exits: [],
  loot: ['potion', 'mace'],
  gameStatus: 'inProgress',
  story: [],
};

export default [
  justAnOrc,
  elfWithLoot,
  jimWithDaggerAndPotion,
];
