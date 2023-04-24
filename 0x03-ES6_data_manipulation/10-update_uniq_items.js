export default function updateUniqueItems(map) {
  const liste = map;

  if (liste instanceof Map) {
    for (const [key, value] of liste) {
      if (value === 1) {
        liste.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return liste;
}
