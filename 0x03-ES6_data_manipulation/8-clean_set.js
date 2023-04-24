export default function cleanSet(set, startString) {
  const l = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      l.push(item.slice(startString.length));
    }
  }

  return l.join('-');
}
