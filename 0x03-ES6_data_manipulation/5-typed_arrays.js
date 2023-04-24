export default function createInt8TypedArray(length, position, value) {
  const a = new ArrayBuffer(length);
  const v = new DataView(a);

  try {
    v.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return v;
}
