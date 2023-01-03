// Create a function named groceriesList that returns a map of groceries
export default function groceriesList() {
  const groceries = new Map([ // Map of groceries and quantities
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
  return groceries; // Return the map
}
