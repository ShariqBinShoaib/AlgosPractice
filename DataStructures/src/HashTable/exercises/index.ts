export function findFirstNonRepeatedCharacter(str: string) {
  const map = new Map<string, number>();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    map.set(char, 1 + (map.get(char) || 0));
  }

  let character: string | null = null;

  map.forEach((value, key) => {
    if (value === 1 && !character) {
      character = key;
    }
  });

  return character;
}

export function findFirstRepeatedCharacter(str: string) {
  const charsSet = new Set<string>();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charsSet.has(char)) return char;
    charsSet.add(char);
  }

  return null;
}
