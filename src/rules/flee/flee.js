import Rule from '../rule';

class Flee extends Rule {
  isAvailable = ({ foeKind }) => Boolean(foeKind);

  description = ({ foeKind }) => `Run away from the ${foeKind}`;

  outcome = gameState => gameState;
}

export default Flee;
