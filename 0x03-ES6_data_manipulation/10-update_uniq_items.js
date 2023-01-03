// Create a function named updateUniqueItems
// that returns an updated map for all items with initial quantity at 1.
// The map it accepts for argument is similar to the map you create in the previous task.
// If updating the quantity is not possible (argument is not a map)
// the error Cannot process should be thrown.
export default function updateUniqueItems(items) {
  if (Object.getPrototypeOf(items) !== Map.prototype) throw new Error('Cannot process');

  items.forEach((value, key) => {
    if (value === 1) {
      items.set(key, 100);
    }
  });

  return items;
}
