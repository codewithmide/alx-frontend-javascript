// Function that returns a boolean value if all elements of an array exist within the set.
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
