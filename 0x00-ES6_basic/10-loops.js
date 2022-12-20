export default function appendToEachArrayValue(array, appendString) {
  const strValue = [];
  for (const idx of array) {
    strValue.push(appendString + idx);
  }

  return strValue;
}
