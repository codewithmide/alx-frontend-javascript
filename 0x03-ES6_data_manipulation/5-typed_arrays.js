export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length); // ArrayBuffer
  const dataView = new DataView(buffer); // DataView
  if (position >= length) throw new RangeError('Position outside range');
  dataView.setUint8(position, value);
  return dataView;
}
