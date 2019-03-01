import Rule from '../rule';

class Slap extends Rule {
  isAvailable = ({ foeKind }) => Boolean(foeKind);

  description = ({ foeKind }) => `Slap the ${foeKind}`;

  outcome = (gameState) => {
    const { story, foeKind } = gameState;
    const newState = {
      ...gameState,
      story: [...story, `You slap the ${foeKind}. It dies.`],
      foeKind: null,
    };
    return newState;
  }
}

export default Slap;
