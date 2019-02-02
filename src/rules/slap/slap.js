import Rule from '../rule';

class Slap extends Rule {
  isAvailable = () => {
    return true;
  }

  description = () => {
    return [];
  }

  outcome = gameState => {
    return gameState;
  }
}

export default Slap;