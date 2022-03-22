function checkAccessories(testString) {
  return /earrings|glasses|hats|neckwear/.test(testString);
}

function checkClothing(testString) {
  return /clothes\(L1\)|clothes\(L2\)|clothes\(L3\)/.test(testString);
}

export default function generationPath(partName, nameFile) {
  const isAccessories = checkAccessories(partName);
  const isClothing = checkClothing(partName);
  const path = `/img/character/${
    isAccessories ? "accessories/" : isClothing ? "clothes/" : ""
  }${partName}/${nameFile}.png`;

  return path;
}
