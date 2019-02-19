import Rule from '../rule';

class Slap extends Rule {
  isAvailable = ({ foeKind }) => Boolean(foeKind);

  description = ({ foeKind }) => `Slap the ${foeKind}`;

  outcome = gameState => gameState;
}

export default Slap;
