import Rule from '../rule';

class Slap extends Rule {
  isAvailable = () => true

  description = () => []

  outcome = gameState => gameState
}

export default Slap;
