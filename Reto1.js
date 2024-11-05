function createMagicPotion(potions, target) {
  const map = new Map();
  
  for (let i = 0; i < potions.length; i++) {
    const complement = target - potions[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(potions[i], i);
  }
  
  return undefined;
}