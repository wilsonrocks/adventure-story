class Rule {
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

export default Rule;